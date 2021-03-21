def getAllNames():
    cursor=con.cursor()
    cursor.execute("select name from parking.importMobility  order by name  asc")
    return cursor.fetchall()