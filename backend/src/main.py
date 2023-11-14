from flask import Flask, request
import sqlite3
import json
from db import DB

app  = Flask(__name__)

@app.route("/ping", methods=["GET"])
def main():
    return {"statusCode": 200, "body": "abcdefg"}

@app.route("/getAllTasks", methods=["GET"])
def GetAllTasks():
    db = DB() 
    return json.dumps(db.getAllTasks())
@app.route("/create", methods=["POST"])
def create():
    body = json.loads(request.data)
    db = DB()
    for key in ["name", "category", "due"]:
        if key not in body.keys(): return "Invalid Request! Check request parameters!", 400
    
    db.createTask(body["name"], body["category"], body["due"])
    return "Created", 200

@app.route("/update", methods=["PUT"])
def update():
    body = json.loads(request.data)
    db = DB()

    for key in body.keys():
        if key not in ["id", "name", "due", "category"]:
            return "Invalid Request! Check request parameters!", 400
        
    db.updateTask(**body)
    return "Updated Successfully"

@app.route("/delete", methods=["DELETE"])
def delete():
    body = json.loads(request.data)
    db = DB()

    if "id" not in body.keys():
        return "Invalid Request! Check request parameters!", 400
    
    db.deleteTask(body["id"])
    return "Deleted Successfully"

if __name__ == "__main__":
    app.run()