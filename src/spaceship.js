//'The Krestel', [], 5, 4

class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'

    // crew.forEach(function(crew_member){
    //   crew_member.currentShip = this
    // }.bind(this)) //that this is in *this scope*

    if(crew.length === 0){
      this.docked = true
    }
    else {
      this.docked = false
      for (var i = 0; i < crew.length; i++) {
        crew[i].currentShip = this
      }

    } //spaceship docked



  } //end of constructor













}//end of class spaceship
