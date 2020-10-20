//engine: JScript
//uname:  udload
//dname:  Выгрузка/загрузка текстов модулей
//addin: global
//addin: stdlib

///<reference path="./snegopat.d.ts"/>
/// <reference path="./v8.d.ts" />

// import * as stdlib from "./std/std";
// import * as stdcommands from "./std/commands";
// import * as hks from "./std/hotkeys";

// @ts-ignore
import GetTextWindow from 'Libs/TextWindow'

global.connectGlobals(SelfScript)

function helloWorld() {
   
    let w = GetTextWindow();
    if (!w)
        return;
    w.text = "Hello, World!";
   
}

SelfScript.self['macrosHelloWorld'] = function () { helloWorld(); }

function getPredefinedHotkeys(predef) {
    predef.setVersion(1);
    predef.add('HelloWorld', "Alt + H");
}
function getDefaultMacros() {
    return 'HelloWorld';
}

