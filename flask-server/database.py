import pyrebase
import json

class DBhandler:
    def __init__(self):
        with open() as f:
            config = json.load(f)

        firebase = pyrebase.initialize_app(config)
        self.db = firebase.datasbase()


#맛집 정보 입력 함수
def insertStore(self, name, data, img_path):
    store_info ={


    }
    self.db.child("stores").child(name).set(store_info)
    print(data,img_path)
    return True
    
# 맛집 정보 중복 체크 함수(insertStore에서 사용)
    def store_duplicate_check():
        return False


...