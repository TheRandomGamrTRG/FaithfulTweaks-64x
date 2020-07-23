const path = require('path');

const addToFile = async function(formatData, archive, bucket){
    // Add each sword to file
    const promises = [];
    formatData.files.forEach((fileData) => {
        promises.push(
            bucket.file(path.join("packfiles", formatData.packFilesPath, fileData.name)).download().then((data) => {
                const contents = data[0];
                archive.append(contents, {name: path.join(fileData.path, fileData.inPackName)});
                return;
            })
        );
    });
    await Promise.all(promises);
    return;
};

module.exports = {
    name: "SlicedSwords",
    addToFile: addToFile,
    format5: {
        packFilesPath: "modules/SlicedSwords/",
        files: [
            {
                name: "diamond_sword.png",
                inPackName: "diamond_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "golden_sword.png",
                inPackName: "golden_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "iron_sword.png",
                inPackName: "iron_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "netherite_sword.png",
                inPackName: "netherite_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "stone_sword.png",
                inPackName: "stone_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "wooden_sword.png",
                inPackName: "wooden_sword.png",
                path: "assets/minecraft/textures/item"
            },
        ]
    },
    format4: {
        packFilesPath: "modules/SlicedSwords/",
        files: [
            {
                name: "diamond_sword.png",
                inPackName: "diamond_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "golden_sword.png",
                inPackName: "golden_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "iron_sword.png",
                inPackName: "iron_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "stone_sword.png",
                inPackName: "stone_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "wooden_sword.png",
                inPackName: "wooden_sword.png",
                path: "assets/minecraft/textures/item"
            },
        ]
    },
    format321: {
        packFilesPath: "modules/SlicedSwords/",
        files: [
            {
                name: "diamond_sword_old.png",
                inPackName: "diamond_sword.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "gold_sword_old.png",
                inPackName: "gold_sword.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "iron_sword_old.png",
                inPackName: "iron_sword.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "stone_sword_old.png",
                inPackName: "stone_sword.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "wood_sword_old.png",
                inPackName: "wood_sword.png",
                path: "assets/minecraft/textures/items"
            },
        ]
    },
};