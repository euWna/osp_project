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
            "img_path" :  "./public/assets/" + img_path,
        }
        if self.store_duplicate_check(name):
            self.db.child("STORE").push(store_info)
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

    # 맛집 데이터 가져오기
    def get_store(self):
        stores = self.db.child("STORE").get().val()
        return stores

    def insert_menu(self,storename,data,img_path):
        menu_info ={
            "food" : data['food'],
            "money" : data['money'],
            "nutrient" : data['nutrient'],
            "img_path" : img_path,
            "storename" :storename
        }
        menuname=data['food']
        if self.menu_duplicate_check(storename,menuname):
            self.db.child("MENU").child(storename).child(menuname).set(menu_info)
            #print(data,img_path)
            return True
        else:
            return False

    # 메뉴 정보 중복 체크 함수(insertmenu에서 사용)
    # def menu_duplicate_check(self, name,food):
    #     menus = self.db.child("MENU").child(name).get()
    #     print (menus)
    #     if menus==None:
    #         return True

    #     for res in menus.each():
    #         if res.key() == food:
    #             return False
    #     return True
    # 지금은 key값이 매장명임...
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

    def insert_review(self,name,data,img_path):
        review_info ={
            "storescore" : data['storescore'],
            "username" : data['username'],
            "reviewtitle" : data['reviewtitle'],
            "reviewdesc" : data['reviewdesc'],
            "img_path" : img_path
        }
        self.db.child("REVIEW").child(name).set(review_info)
        print(data,img_path)
        return True
   
