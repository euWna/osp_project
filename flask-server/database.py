import pyrebase
import json

class DBhandler:
    def __init__(self):
        with open('flask-server/authentication/firebase_auth.json') as f:
            config = json.load(f)

        firebase = pyrebase.initialize_app(config)
        self.db = firebase.database()
        firebaseEmailAuth = firebase.auth()


 #회원가입
    def insert_user(self, data, pwd):
        user_info = {
            "nickname" : data['nickname'],
            "email" : data['email'],
            "pwd" : pwd
        }
        # if self.user_duplicate_check(str(data['email'])):
        self.db.child("user").push(user_info)
        print(data)
        return True
        # else:
            # return False

    def user_duplicate_check(self, id_string):
        users = self.db.child("user").get()
        print("users###",users.val())
        if str(users.val()) == "None": # first registration
            return True
        else:
            for res in users.each():
                value = res.val()
                if value['email'] == id_string:
                    return False
            return True


    #로그인 부분
    def find_user(self, email_, pwd_):
        users = self.db.child("user").get()
        target_value=[]
        for res in users.each():
            value = res.val()
            if value['email'] == email_ and value['pwd'] == pwd_:
                return True
            return False
            
    #평균 평점 계산하고 push해주는 함수
    def AverageScore(self,storename):
        count = 0
        sum = 0
        users=self.db.child("REVIEW").child(storename).get().val()
        if users: 
            for user in users:
                score=self.db.child("REVIEW").child(storename).child(user).get("storescore")
                sum =sum +score
                count =count+1
            avg=sum/count      
            self.db.child("STORE").child(storename).push({"avg_score" ,avg})     
            # self.db.child("STORE").child(storename).ref('avg_score').push(avg)    
        return avg


################ 맛집 정보 입력 관련 함수 ################
    # 맛집 정보 등록
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
            "img_path" : img_path,
            # "avg_score": "",
        }

        if img_path == "" :
            store_info["img_path"]="symbol-mark.png"

        if self.store_duplicate_check(name):
            self.db.child("STORE").push(store_info)
            return True
        else:
            return False
        
    # 맛집 정보 중복 체크 
    def store_duplicate_check(self, name):
        stores = self.db.child("STORE").get()
        for res in stores.each():
            value=res.val()
            if value['storename']==name:
            # if res.key() == name:
                return False
        return True

    # 전체 맛집 데이터 가져오기
    def get_store(self):
        stores = self.db.child("STORE").get().val()
        return stores


    def get_store_info(self,storename):
        storeInfo = self.db.child("STORE").child(storename).get().val
        return storeInfo


    # 특정 맛집 데이터 가져오기
    def get_store_byname(self, storename):
        stores = self.db.child("STORE").get()
        target_value=""
        for res in stores.each():
            value = res.val()
            if value['storename'] == storename:
                target_value=value
                break
        return target_value

    # 맛집 정보 업데이트
    def update_store(self,storename,data,img_path):            
        store_info ={
            #"name" : name,
            #"storename" : data['storename'],
            "location" : data['location'],
            "phonenumber" : data['phonenumber'], 
            "time1" : data['time1'],
            "time2" : data['time2'],
            "food" : data['food'],
            "park" : data['park'],
            "price1" : data['price1'],
            "price2" : data['price2'],
            "site" : data['site'],
            # "img_path" : img_path
        }

        if img_path :
            store_info["img_path"]=img_path

        stores = self.db.child("STORE").get()
        for res in stores.each():
            value = res.val()
            if value['storename'] == storename:
                self.db.child("STORE").child(res.key()).update(store_info)
                return True


        #self.db.child("STORE").child(name).
        # if self.store_duplicate_check(name):
        #     self.db.child("STORE").update(store_info)
        #     #print(data,img_path)
        #     return True
        # else:
        #     self.insert_store(self,name,data,img_path)
        #     self.db.child("STORE").child(name).remove()
        #     return True 


################ 메뉴 정보 입력 관련 함수 ################

    def insert_menu(self,storename,data,img_path):
        menu_info ={
            "food" : data['food'],
            "money" : data['money'],
            # "nutrient" : data['nutrient'],
            "img_path" : img_path,
            "storename" :storename
        }

        if img_path == "" :
            menu_info["img_path"]="symbol-mark.png"

        menuname=data['food']
        if self.menu_duplicate_check(storename,menuname):
            self.db.child("MENU").child(storename).child(menuname).set(menu_info)
            #print(data,img_path)
            return True
        else:
            return False

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

    # def get_menu(self, storename):
    #     menudata = self.db.child("MENU").child(storename).get()
    #     if isinstance(menudata.val(), type(None)):
    #         menu=None
    #         return menu
    #     else:
    #         for res in menudata.each():
    #              menuInfo=self.db.child("MENU").child(storename).child(res.key).get()
                
    #     return menuIㄴnfo
    def get_menu(self,storename):
        menus = self.db.child("MENU").child(storename).get().val() #해당 맛집의 메뉴들을 가져옴
        return menus


################ 리뷰 정보 입력 관련 함수 ################

    def insert_review(self, storename, data, img_path):
        review_info ={
            "timestamp":data['timestamp'],
            "storename" : storename,
            "storescore" : data['storescore'],
            "username" : data['username'],
            "reviewtitle" : data['reviewtitle'],
            "reviewdesc" : data['reviewdesc'],
            "img_path" : img_path
        }

        if img_path == "" :
            review_info["img_path"]="symbol-mark.png"

        username=data['username']
        self.db.child("REVIEW").child(storename).child(username).set(review_info)
        return True

    def get_review(self,storename):
        reviews = self.db.child("REVIEW").child(storename).get().val() #해당 맛집의 메뉴들을 가져옴
        #sorted_by_times=self.db.child("REVIEW").child(storename).order_by_child("timestamp")
        return reviews

    def get_all_review(self):
        stores=self.db.child("REVIEW").get().val()
        # # review_all[100]
        # review_all={}
        # review_info={}
        # i=0
        # for store in stores:
        #     # review_all=zip(review_all, review_instore)
        #     user=self.db.child("REVIEW").child(store).get()
        #     if user:
        #         # review=self.db.child("REVIEW").child(store).get().val()
        #         # keys=self.db.child("REVIEW").child(store).get().key()
        #         # for keyinreview in keys:
        #             # review_all[store]=[user][keyinreview]=self.db.child("REVIEW").child(store).get(keyinreview)
        #             # i=i+1
        #         review_info[user]=self.db.child(store).get().val()
        #     review_all[store]={review_info}

        print(stores)
        for store in stores:
            review_all=self.db.child("REVIEW").child(store).get().val()

        return stores


        