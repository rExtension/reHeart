// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Rintim (Rintim@theopse.org)
// Licensed under BSD-2-Caluse
// File: module.js (rExtension/reHeart/module.js)
// Content:  
// Copyright (c) 2022 Rintim All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

module.exports = (path) => ({
    main: (_args, _storage) => {
        // Create Methods
        let result = {
            name: "reHeart",
            intro: "rExtension Runtime from Rintim",
            version: "0.2.0",
            branch: "Development",
            build: 2,
            year: 2022,
            month: "06",
            date: "03",
            times: "001",
        };

        {
            const Sources = ["array", "object", "number"];
            const Class = [Array, Object, Number];
            const Functions = Sources.map(src => require(`${path}/source/${src}.js`)());

            result["functions"] = {};

            for (let i in Sources) {
                result.functions[Class[i]] = Functions[i];
            }
        }

        return result;
    }
})