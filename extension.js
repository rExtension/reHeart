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
    let extInfo = {
		intro: "rExtension Runtime from Rintim",
		version: "0.1.0",
		branch: "Release",
		build: 2,
		year: 2022,
		month: "05",
		date: 25,
		times: "002",
	};

    let extension = {
        name: "reHeart", // library-reHeart
		// Make the extension not editable in the game
		// 让扩展不能在游戏内被编辑
        editable: false,
        content: (_config, _pack) => {
            // Initialize
            if (lib.storage["reHeart"]) return;
            lib.storage["reHeart"] = true;
            const name = "reHeart";
            // Add Key Group
            lib.arenaReady.push(() => {
                if (!lib.group.contains("key")) lib.group.add("key");
            });
            // Create Methods
            {
                const sources = ["array", "object", "number"];

                sources.forEach(src => require(`./extension/${name}/source/${src}.js`)());
            }
            // AfterMath
            lib.arenaReady.push(() => {
                delete lib.extensionMenu[`extension_${name}`]["author"];
                const aDelete = lib.extensionMenu[`extension_${name}`]["delete"];
                const aEnable = lib.extensionMenu[`extension_${name}`]["enable"];
                delete lib.extensionMenu[`extension_${name}`]["delete"];
                delete lib.extensionMenu[`extension_${name}`]["enable"];
                lib.extensionMenu[`extension_${name}`]["br"] = {
                    "name": "</br></br></br>",
                    "clear": true,
                    "nopointer": true
                };
                let intro = [
                    "= = = = = = = = = = = = = = = = =</br>",
                    "<span style=\"color:#1688F2\">rExtension Runtime from Rintim</span>",
                    `<span style=\"color:#FF3333\">Development Branch </br>From ${extInfo.year}.${extInfo.month}.${extInfo.date}.${extInfo.times}</span></br>`,
                    "= = = = = = = = = = = = = = = = ="
                ];
                if (extInfo.branch !== "Development") {
                    intro[2] = `<span style=\"color:#1688F2\">Version: ${["Release", "Preview"].includes(extInfo.branch) ? (extInfo.branch === "Preview" ? `${extInfo.version}pre` : `${extInfo}`) : `Build ${extInfo.build} ${extInfo.nextPreview !== undefined ? `Form ${extInfo.nextPreview}` : ""}`}</span></br>`;
                    intro[3] = `${intro[3]}</br>`;
                }
                lib.extensionMenu[`extension_${name}`].intro.name = intro.join("</br>");
                // lib.extensionMenu[`extension_${name}`].intro.onclick();
                lib.extensionMenu[`extension_${name}`]["enable"] = aEnable;
                lib.extensionMenu[`extension_${name}`]["delete"] = aDelete;
            });
        },
        config: {},
        help: {},
        package: {
            intro: extInfo.intro,
            author: "Rintim",
            diskURL: "",
            forumURL: "",
            version: "0.1.0",
        },
        files: {
            "character": [],
            "card": [],
            "skill": []
        }
    }
    return extension;
});