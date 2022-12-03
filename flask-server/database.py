import pyrebase
import json

class DBhandler:
    def __init__(self):
        with open('flask-server/authentication/firebase_auth.json') as f:
            config = json.load(f)

        firebase = pyrebase.initialize_app(config)
        self.db = firebase.database()

    #맛집 정보 입력 함수
    def insert_store(self,name,data,img_path):
        store_info ={
            "storename" : data['storename'],
            "location" : data['location'],
            "phonenumber" : data['phonenumber'], 
            "time1" : data['time1'],
            "time2" : data['time2'],
            "food" : data['food'],
            "park" : data['park'],
            "price1" : data['price1'],
            "price2" : data['price2'],
            "site" : data['site'],
            "img_path" : "../static/image/"+img_path
        }

        if self.store_duplicate_check(name):
            self.db.child("STORE").push(store_info)
            #print(data,img_path)
            return True
        else:
            return False
        
    # 맛집 정보 중복 체크 함수(insertStore에서 사용)
    def store_duplicate_check(self, name):
        stores = self.db.child("STORE").get()
        for res in stores.each():
            if res.val()['storename'] == name:
                return False
        return True

    #전체 맛집 정보 가져오는 함수(StoreListView에서 사용)
    def get_stores(self):
        stores = self.db.child("STORE").get().val()
        #print(stores)
        return stores

    #특정 맛집의 세부 정보 가져오는 함수
    def get_store_byname(self,name):
        stores = self.db.child("STORE").get()
        target_value=""
        for res in stores.each():
            value = res.val()
            if value['storename'] == name:
                target_value=value
                break
        return target_value

    def update_store(self,name,data,img_path):
        store_info ={
            "name" : name,
            "storename" : data['storename'],
            "location" : data['location'],
            "phonenumber" : data['phonenumber'], 
            "time1" : data['time1'],
            "time2" : data['time2'],
            "food" : data['food'],
            "park" : data['park'],
            "price1" : data['price1'],
            "price2" : data['price2'],
            "site" : data['site'],
            "img_path" : "static/image/"+img_path
        }

        if self.store_duplicate_check(name):
            self.db.child("STORE").update(store_info)
            #print(data,img_path)
            return True
        else:
            self.insert_store(self,name,data,img_path)
            self.db.child("STORE").child(name).remove()
            return True


    def insert_menu(self, storename, menudata,img_path):
        menu_info ={
            "menuname" : menudata['menuname'],
            "price" : menudata['price'],
            "nutrient" : menudata['nutrient'],
            "img_path" : "static/img/"+img_path
        }
        if self.menu_duplicate_check(storename, menudata['menuname']):
            self.db.child("MENU").child(storename).child(menudata['menuname']).set(menu_info)
            #print(data,img_path)
            return True
        else:
            return False

    # 메뉴 정보 중복 체크 함수(insertmenu에서 사용)
    def menu_duplicate_check(self, storename, menuname):
        menudata = self.db.child("MENU").child(storename).get()
        if isinstance(menudata.val(), type(None)):
            #print("NONE")
            return True
        else:
            for res in menudata.each():
                if res.key() == menuname:
                    return False
        return True

    # 해당 맛집의 메뉴들을 가져오는 함수 
    def get_menus(self,storename):
        menus = self.db.child("MENU").child(storename).get().val()
        #print(stores)
        return menus

        # 여기서 오류가..??????/

    #해당 맛집의 특정 메뉴의 정보를 가져오는 함수
    def get_menu_byname(self,storename,menuname):
        menus = self.db.child("MENU").child("storename").get()
        target_key=""
        for res in menus.each():
            key = res.key()
            if key == storename:
                target_key=key
                break
        target_value=target_key.val()
        return target_value


    def insert_review(self, storename, reviewdata, img_path):
        review_info ={
            "storename" : storename,
            "storescore" : reviewdata['storescore'],
            "username" : reviewdata['username'],
            "reviewtitle" : reviewdata['reviewtitle'],
            "reviewdesc" : reviewdata['reviewdesc'],
            "img_path" : "static/image/"+img_path
        }
        self.db.child("REVIEW").child(storename).child(reviewdata['username']).set(review_info)
        return True

    def get_reviews(self, storename):
        reviews = self.db.child("REVIEW").child(storename).get().val()
        #print(stores)
        return reviews

    