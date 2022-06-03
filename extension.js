// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Rintim (Rintim@theopse.org)
// Licensed under BSD-2-Caluse
// File: extension.js (rExtension/reHeart/extension.js)
// Content:  
// Copyright (c) 2022 Rintim All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

"use strict"

/*
lib.config.extensions
lib.config.extension_RitySelf_enable
*/

game.import("extension", (lib, _game, _ui, _get, _ai, _status) => {
    let extension = {
        name: "reHeart", // library-reHeart
        // Make the extension not editable in the game
        // 让扩展不能在游戏内被编辑
        editable: false,
        content: (_config, _pack) => {
            // Initialize
            if (lib.storage["reHeart"]) return;

            const Name = "reHeart";
            const Module = require(`./extension/${Name}/module.js`)();
            const ExtInfo = Module.main();

            lib.reHeart = ExtInfo;

            for (let i in ExtInfo.functions) {
                const Class = ExtInfo.functions[i];
                const NewClass = require(`./extension/${Name}/source/${i}.js`)();

                for (let j in NewClass) {
                    if (!Class._super) Class._super = {};
                    if (j === "prototype") {
                        if (!Class.prototype._super) Class.prototype._super = {};
                        for (let k in NewClass[j]) {
                            if (Class.prototype[j]) Class.prototype._super[j] = Class.prototype[j];
                            Class.prototype[k] = NewClass[j][k];
                        }
                        continue;
                    }
                    else if (j === "Symbol.iterator") {
                        Class.prototype[Symbol.iterator] = NewClass[j];
                        continue;
                    }
                    if (Class[j]) Class._super[j] = Class[j];
                    Class[j] = NewClass[j];
                }
            }

            // AfterMath
            lib.arenaReady.push(() => {
                delete lib.extensionMenu[`extension_${Name}`]["author"];
                const aDelete = lib.extensionMenu[`extension_${Name}`]["delete"];
                const aEnable = lib.extensionMenu[`extension_${Name}`]["enable"];
                delete lib.extensionMenu[`extension_${Name}`]["delete"];
                delete lib.extensionMenu[`extension_${Name}`]["enable"];
                lib.extensionMenu[`extension_${Name}`]["br"] = {
                    "name": "</br></br></br>",
                    "clear": true,
                    "nopointer": true
                };
                let intro = [
                    "= = = = = = = = = = = = = = = = =</br>",
                    "<span style=\"color:#1688F2\">rExtension Runtime from Rintim</span>",
                    `<span style=\"color:#FF3333\">Development Branch </br>From ${ExtInfo.year}.${ExtInfo.month}.${ExtInfo.date}.${ExtInfo.times}</span></br>`,
                    "= = = = = = = = = = = = = = = = ="
                ];
                if (ExtInfo.branch !== "Development") {
                    intro[2] = `<span style=\"color:#1688F2\">Version: ${["Release", "Preview"].includes(ExtInfo.branch) ? (ExtInfo.branch === "Preview" ? `${ExtInfo.version}pre` : `${ExtInfo}`) : `Build ${ExtInfo.build} ${ExtInfo.nextPreview !== undefined ? `Form ${ExtInfo.nextPreview}` : ""}`}</span></br>`;
                    intro[3] = `${intro[3]}</br>`;
                }
                lib.extensionMenu[`extension_${Name}`].intro.name = intro.join("</br>");
                // lib.extensionMenu[`extension_${name}`].intro.onclick();
                lib.extensionMenu[`extension_${Name}`]["enable"] = aEnable;
                lib.extensionMenu[`extension_${Name}`]["delete"] = aDelete;
            });

            lib.storage["reHeart"] = true;
        },
        config: {},
        help: {},
        package: {
            intro: "rExtension Runtime from Rintim",
            author: "Rintim",
            diskURL: "",
            forumURL: "",
            version: "0.2.0",
        },
        files: {
            "character": [],
            "card": [],
            "skill": []
        }
    }
    return extension;
});