import sqlite3
import time
import math 

class DB:
    taskID = 0
    def __init__(self) -> None:
        self.conn = sqlite3.connect("demo.db")
        self.cursor = self.conn.cursor()

        self.conn.execute("CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, name TEXT, category TEXT, due INTEGER)")
        DB.taskID = max(self.cursor.execute("SELECT COUNT(*) FROM tasks").fetchone()[0] + 1, DB.taskID)

    def clear(self):
        self.cursor.execute("DELETE FROM tasks")
        self.conn.commit()

    def createTask(self, name: str, cat: str, due: int):
        self.cursor.execute(
            "INSERT INTO tasks VALUES (?, ?, ?, ?)",
            (DB.taskID, name, cat, due)
        )
        self.conn.commit()
        DB.taskID += 1
    
    def deleteTask(self, id: int):
        self.cursor.execute("DELETE FROM tasks WHERE id=?", (id,))
        self.conn.commit()
    def updateTask(self, id:int, name=None, due=None, category=None):
        if name != None:
            self.cursor.execute("UPDATE tasks SET name=? WHERE id=?", (name, id))
        if due != None:
            self.cursor.execute("UPDATE tasks SET due=? WHERE id=?", (due, id))
        if category != None:
            self.cursor.execute("UPDATE tasks SET category=? WHERE id=?", (category, id))
        self.conn.commit()

    def getAllTasks(self):
        return self.cursor.execute("SELECT * FROM tasks").fetchall()
    def getTaskByID(self, id: int):
        return self.cursor.execute("SELECT * FROM tasks WHERE id=?", (id,)).fetchone()

if __name__=="__main__":
    db = DB()

    db.createTask("test", 'na', math.floor(time.time()))
    # db.deleteTask("test", 1699745070)
    # db.updateTask(6, category='100')

    print(db.getAllTasks())