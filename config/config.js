const config = {
    app_name: 'DogeGang Rarity',
    app_description: 'Cool Rarity is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: 'dg_metadata.json',
    collection_contract_address: '0x011f614b13ef08b905a2ae68443f6344cce32046',
    collection_name: 'DogeGang NFT Collection',
    collection_description: 'DogeGang is an NFT collection on Dogechain, made up of 6666 Crazy Gang Doges',
    collection_id_from: 1,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database.sqlite',
    ga: 'G-BW69Z04YTP',
    main_og_image: 'https://ipfs.io/ipfs/bafybeihygx4c6abfllah3k5z3lieqvsjgifbwr7zr6nah3rrkzoe372b4i/logo512.png',
    item_path_name: 'doge',
    page_item_num: 60,
    content_image_is_video: false,
    content_image_frame: 'circle', // circle, rectangle
    use_wallet: false
};

module.exports = config;