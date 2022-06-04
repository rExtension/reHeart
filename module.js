// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Rintim (Rintim@theopse.org)
// Licensed under BSD-2-Caluse
// File: module.js (rExtension/reHeart/module.js)
// Content:  
// Copyright (c) 2022 Rintim All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

module.exports = () => ({
    main: (_args, _storage) => {
        // Create Methods
        let result = {
            name: "reHeart",
            bool: true,
            intro: "rExtension Runtime from Rintim",
            version: "0.2.0",
            branch: "Development",
            build: 2,
            year: 2022,
            month: "06",
            date: "04",
            times: "002",
        };

        if (lib.storage["reHeart"]) result.bool = false;
        else {
            const Sources = ["array", "object", "number"];
            const Class = [Array, Object, Number];
            result["functions"] = {};

            for (let i = 0; i < Sources.length; ++i) {
                // alert(`${path}/source/${Sources[i]}.js`);
                // result.functions[Class[i]] = require(`${path}/source/${Sources[i]}.js`);
                result["functions"][Sources[i]] = Class[i];
            }
        }

        return result;
    }
})