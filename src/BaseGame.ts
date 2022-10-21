import IBaseGame from "./interface/IBaseGame";
import Level from "./Level";
import Piece from "./Piece";
import Utils from "./Utils";

export default abstract class BaseGame implements IBaseGame {
    protected moving: boolean = false;

    protected paused: boolean = false;

    protected gridVisible: boolean = false;

    protected debugSpeed: number = 0;

    protected keyHeld: number = 0;

    protected noClip: boolean = false;

    /**
     * @returns {number}
     * Egy random számot szorozz meg a this.levels.length-szel, 
     * majd kerekítsd lefelé, ez lesz az index.
     * Majd térj vissza a this.levels tömbnek ezzel az indexével.
     */
     abstract getRandomLevel(levels: any[]): Level {
        let feladat = Math.random();
        this.levels= new Level;
        let rand = Math.floor(feladat*this.levels.length);
         return rand;
    }


    /**
     * @returns {boolean}
     * 1. hozz létre egy chance nevű változót 5 értékkel
     * 2. hozz létre egy pick nevű változót, értéke random szám szorozva 100-zal
     * 3. térj vissza true értékkel, ha a pick kisebb, mint a chance
     */
     abstract mayIHaveGoldenApple(chance:number, pick:number): boolean{
        chance= 5;
        pick = Math.random ()*100;
       if (pick<chance){
           return true;
       }else {
           return false;
       }
   }



    /**
     * @returns {void}
     * A metódus feladatai:
     * 1. keresd meg a DOM-ban az összes .vertical-grid és .horizontal-grid 
     * elemet
     * 2. mentsd el őket egy grids nevű változóba
     * 3. járd be a tömböt, és minden elemére hívd meg a Utils.removeNode 
     * metódust, hogy eltávolítsd őket az oldalról
     * 4. a this.gridVisible értékét állítsd false-ra
     */
     abstract removeGrid (): void{
        let grids = [];
        grids.push(document.getElementsByClassName("vertical-grid horizontal-grid"));
        for (let i=0; i<grids.length; i++ ){
            Utils.removeNode(grids[i]); 
        
        }
        this.gridVisible =false; 

    }
}
