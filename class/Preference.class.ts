type Theme = "light" | "dark";
export class Preference{
    private _fontSize:number = 1; //em
    private _theme: Theme = "light"

    getFontSize():string{return this._fontSize+"em";}
    setFontSize(newFontSize:number){this._fontSize = newFontSize;}

    getTheme(){return this._theme}
    setTheme(newTheme:Theme){this._theme = newTheme}
}

export interface IPreference{
    fontSize:number,
    theme: Theme
}