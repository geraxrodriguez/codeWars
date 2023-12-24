def declare_winner(fighter1, fighter2, first_attacker):
    # assigning cur, and opp
    # .name is how we access attributes of fighers
    cur, opp = (fighter1, fighter2) if first_attacker == fighter1.name else (fighter2, fighter1)
    
    # while current fighers health is greater than zero 
    while cur.health > 0:        
        # subtracted current fighter's attack from opps health
        opp.health -= cur.damage_per_attack
        # switch figher who will be attacking next iteratioin
        cur, opp = opp, cur
    return opp.name
