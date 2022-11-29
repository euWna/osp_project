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
            "name":name,
>>>>>>> 957b3797f5a2860c1fe0f3f141d2c890567a953d
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
            self.db.child("STORE").push(store_info)
            print(data,img_path)
            return True
        else:
            return False
        
    # 맛집 정보 중복 체크 함수(insertStore에서 사용)
    def store_duplicate_check(self, name):
        stores = self.db.child("STORE").get()
        for res in stores.each():
            if res.key() == name:
                return False
        return True

    #맛집 정보 가져오는 함수(StoreListView에서 사용)
    def get_stores(self):
        stores = self.db.child("STORE").get().val()
        #print(stores)
        return stores

    def get_store_byname(self,name):
        stores = self.db.child("STORE").get()
        target_value=""
        for res in stores.each():
            value = res.val()
            if value['storename'] == name:
                target_value=value
                break
        return target_value


    def insert_menu(self,name,data,img_path):
        menu_info ={
            "name" : name,
            "food" : data['food'],
            "money" : data['money'],
            "nutrient" : data['nutrient'],
            "img_path" : "static/image/"+img_path
        }
        if self.menu_duplicate_check(name):
            self.db.child("MENU").push(menu_info)
            print(data,img_path)
            return True
        else:
            return False

    # 메뉴 정보 중복 체크 함수(insertmenu에서 사용)
    def menu_duplicate_check(self, name):
        menus = self.db.child("MENU").get()
        for res in menus.each():
            if res.key() == name:
                return False
        return True

    def get_menus(self):
        menus = self.db.child("MENU").get().val()
        #print(stores)
        return menus




    def insert_review(self,name,data,img_path):
        review_info ={
            "name" : name,
            "storescore" : data['storescore'],
            "username" : data['username'],
            "reviewtitle" : data['reviewtitle'],
            "reviewdesc" : data['reviewdesc'],
            "img_path" : "static/image/"+img_path
        }
        if self.review_duplicate_check(name):
            self.db.child("REVIEW").push(review_info)
            print(data,img_path)
            return True
        else:
            return False

    def get_reviews(self):
        reviews = self.db.child("REVIEW").get().val()
        #print(stores)
        return reviews
    