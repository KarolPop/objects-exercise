function Telefon(producent, marka, cena, kolor) { 
  this.producent = producent;
  this.marka = marka; 
  this.cena = cena; 
  this.kolor = kolor || "black"; 
} 

Telefon.prototype.printInfo = function() { 
  console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + "."); 
}

Telefon.prototype.showPrice = function() {
  console.log("Ostateczna cena" + this.marka + "wynosi: " + this.cena);
}

Telefon.prototype.showManufacturer = function() {
  console.log("Producentem " + this.marka + " jest firma: " + this.producent);
}

 var iPhone6S = new Telefon("Apple", "srebrn", 2250);

var SamsungGalaxysS6 = new Telefon("Samsung", "czerwony", 1100);

var OnePlusOne = new Telefon("OnePlus", "czerwony", 1100); 

 