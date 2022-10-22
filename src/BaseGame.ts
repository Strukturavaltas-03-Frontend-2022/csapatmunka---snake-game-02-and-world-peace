import IBaseGame from "./interface/IBaseGame";
import Level from "./Level";
import Piece from "./Piece";
import Utils from "./Utils";

export default abstract class BaseGame implements IBaseGame {
    protected head: Piece;
    protected tail: Piece;
    protected paused: boolean = false;
    protected food: Piece | null;
    protected goldenApple: Piece | null;
    protected length: number = 0;
    protected growth: number = 0;
    protected score: number = 0;
    protected currentLevel: Level | null;
    protected garden: HTMLDivElement;

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
     abstract getRandomLevel(): Level {
        const feladat = Math.random();
        const rand = Math.floor(feladat*this.levels.length);
         return this.levels[rand];
    }


    /**
     * @returns {boolean}
     * 1. hozz létre egy chance nevű változót 5 értékkel
     * 2. hozz létre egy pick nevű változót, értéke random szám szorozva 100-zal
     * 3. térj vissza true értékkel, ha a pick kisebb, mint a chance
     */
     abstract mayIHaveGoldenApple(): boolean{
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
        
        const grids: [] = Array.from(document.getElementsByClassName("vertical-grid horizontal-grid"))
        for (let i=0; i<grids.length; i++ ){
            Utils.removeNode(grids[i]); 
        
        }
        this.gridVisible =false; 

    }
}
