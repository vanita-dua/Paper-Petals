/* ===========================================================
   Paper Petals
   products.js

   Stores all stationery products used throughout the website.
=========================================================== */

const products = [

    {
        id:101,
        name:"Floral Dream Journal",
        category:"Journals",
        brand:"Paper Petals",
        description:
        "Premium floral hardcover journal with smooth ivory pages.",
        price:399,
        discount:20,
        rating:4.9,
        stock:40,
        image:"../assets/images/products/floral-journal.jpg",

        features:[
            "Hard Cover",
            "120 GSM Paper",
            "Elastic Band",
            "Ribbon Bookmark"
        ]
    },

    {
        id:102,
        name:"Pastel Spiral Notebook",
        category:"Notebooks",
        brand:"Deli",
        description:
        "Cute spiral notebook perfect for school and office.",
        price:249,
        discount:15,
        rating:4.8,
        stock:70,
        image:"../assets/images/products/pastel-notebook.jpg",

        features:[
            "A5 Size",
            "200 Pages",
            "Premium Paper",
            "Soft Cover"
        ]
    },

    {
        id:103,
        name:"Macaron Gel Pen Set",
        category:"Gel Pens",
        brand:"Zebra",
        description:
        "Smooth writing colorful gel pens.",
        price:349,
        discount:10,
        rating:5.0,
        stock:80,
        image:"../assets/images/products/gel-pens.jpg",

        features:[
            "Set of 10",
            "Quick Dry Ink",
            "Fine Tip",
            "Pastel Colors"
        ]
    },

    {
        id:104,
        name:"Kawaii Sticker Pack",
        category:"Stickers",
        brand:"Paper Petals",
        description:
        "Cute waterproof decorative stickers.",
        price:199,
        discount:25,
        rating:4.8,
        stock:120,
        image:"../assets/images/products/stickers.jpg",

        features:[
            "50 Stickers",
            "Waterproof",
            "Gloss Finish",
            "Cute Designs"
        ]
    },

    {
        id:105,
        name:"Pastel Washi Tape Set",
        category:"Washi Tape",
        brand:"MT",
        description:
        "Decorative washi tape collection for journaling.",
        price:299,
        discount:15,
        rating:4.9,
        stock:60,
        image:"../assets/images/products/washi-tape.jpg",

        features:[
            "10 Rolls",
            "Easy Tear",
            "Pastel Theme",
            "Reusable"
        ]
    },

    {
        id:106,
        name:"Weekly Study Planner",
        category:"Planners",
        brand:"Muji",
        description:
        "Minimal weekly planner designed for students.",
        price:599,
        discount:15,
        rating:4.7,
        stock:35,
        image:"../assets/images/products/planner.jpg",

        features:[
            "Weekly Layout",
            "Premium Paper",
            "Hard Cover",
            "Bookmark Ribbon"
        ]
    },

    {
        id:107,
        name:"Canvas Pencil Case",
        category:"Pencil Cases",
        brand:"Kokuyo",
        description:
        "Large capacity canvas pencil pouch.",
        price:449,
        discount:18,
        rating:4.8,
        stock:52,
        image:"../assets/images/products/pencil-case.jpg",

        features:[
            "Canvas Material",
            "Water Resistant",
            "Large Storage",
            "Smooth Zipper"
        ]
    },

    {
        id:108,
        name:"Pastel Sticky Notes",
        category:"Sticky Notes",
        brand:"Paper Petals",
        description:
        "Cute sticky notes for reminders and planning.",
        price:149,
        discount:10,
        rating:4.7,
        stock:100,
        image:"../assets/images/products/sticky-notes.jpg",

        features:[
            "400 Sheets",
            "Easy Peel",
            "Bright Colors",
            "Strong Adhesive"
        ]
    },

    {
        id:109,
        name:"Wooden Desk Organizer",
        category:"Desk Organizers",
        brand:"IKEA",
        description:
        "Wooden organizer to keep your desk tidy.",
        price:899,
        discount:12,
        rating:4.9,
        stock:22,
        image:"../assets/images/products/desk-organizer.jpg",

        features:[
            "Natural Wood",
            "Multiple Compartments",
            "Premium Finish",
            "Durable"
        ]
    },

    {
        id:110,
        name:"Dual Tip Brush Pen Set",
        category:"Brush Pens",
        brand:"Tombow",
        description:
        "Professional brush pens for lettering and art.",
        price:799,
        discount:20,
        rating:5.0,
        stock:40,
        image:"../assets/images/products/brush-pens.jpg",

        features:[
            "Dual Tips",
            "Water Based Ink",
            "Blendable",
            "Set of 12"
        ]
    },

    {
        id:111,
        name:"Luxury Stationery Gift Box",
        category:"Gift Boxes",
        brand:"Paper Petals",
        description:
        "Premium gift box filled with cute stationery.",
        price:1299,
        discount:15,
        rating:4.9,
        stock:18,
        image:"../assets/images/products/gift-box.jpg",

        features:[
            "Premium Packaging",
            "Gift Ready",
            "Limited Edition",
            "Includes Accessories"
        ]
    },

    {
        id:112,
        name:"Minimal Daily Notepad",
        category:"Notebooks",
        brand:"Muji",
        description:
        "Simple daily planner for notes and tasks.",
        price:199,
        discount:10,
        rating:4.6,
        stock:90,
        image:"../assets/images/products/notepad.jpg",

        features:[
            "100 Pages",
            "Minimal Design",
            "A5 Size",
            "Smooth Paper"
        ]
    },

    {
        id:113,
        name:"Cherry Blossom Journal",
        category:"Journals",
        brand:"Paper Petals",
        description:
        "Elegant journal inspired by cherry blossoms.",
        price:499,
        discount:15,
        rating:4.8,
        stock:44,
        image:"../assets/images/products/cherry-journal.jpg",

        features:[
            "Hard Cover",
            "Elastic Band",
            "Premium Paper",
            "Elegant Print"
        ]
    },

    {
        id:114,
        name:"Cute Animal Sticker Set",
        category:"Stickers",
        brand:"Paper Petals",
        description:
        "Adorable animal-themed decorative stickers.",
        price:179,
        discount:20,
        rating:4.8,
        stock:110,
        image:"../assets/images/products/animal-stickers.jpg",

        features:[
            "60 Stickers",
            "Gloss Finish",
            "Water Resistant",
            "Cute Artwork"
        ]
    },

    {
        id:115,
        name:"Macaron Highlighter Set",
        category:"Brush Pens",
        brand:"Mildliner",
        description:
        "Soft pastel highlighters for study notes.",
        price:449,
        discount:18,
        rating:4.9,
        stock:56,
        image:"../assets/images/products/highlighters.jpg",

        features:[
            "Set of 6",
            "Soft Colors",
            "Quick Dry",
            "Chisel Tip"
        ]
    },

    {
        id:116,
        name:"Vintage Kraft Notebook",
        category:"Notebooks",
        brand:"Paper Petals",
        description:
        "Rustic kraft notebook perfect for journaling and sketching.",
        price:329,
        discount:15,
        rating:4.7,
        stock:48,
        image:"../assets/images/products/kraft-notebook.jpg",

        features:[
            "A5 Size",
            "Hard Cover",
            "Premium Kraft Paper",
            "180 Pages"
        ]
    },

    {
        id:117,
        name:"Pastel Binder Clips",
        category:"Desk Organizers",
        brand:"Deli",
        description:
        "Cute pastel binder clips for organizing documents.",
        price:149,
        discount:12,
        rating:4.6,
        stock:95,
        image:"../assets/images/products/binder-clips.jpg",

        features:[
            "Pack of 20",
            "Pastel Colors",
            "Rust Resistant",
            "Strong Grip"
        ]
    },

    {
        id:118,
        name:"Aesthetic Memo Pad",
        category:"Sticky Notes",
        brand:"Paper Petals",
        description:
        "Minimal memo pad for reminders and quick notes.",
        price:199,
        discount:10,
        rating:4.8,
        stock:72,
        image:"../assets/images/products/memo-pad.jpg",

        features:[
            "200 Sheets",
            "Minimal Design",
            "Easy Tear",
            "Smooth Paper"
        ]
    },

    {
        id:119,
        name:"Galaxy Gel Pen Collection",
        category:"Gel Pens",
        brand:"Pentel",
        description:
        "Premium gel pen collection with smooth ink flow.",
        price:599,
        discount:20,
        rating:4.9,
        stock:38,
        image:"../assets/images/products/galaxy-pens.jpg",

        features:[
            "Set of 8",
            "Quick Dry Ink",
            "Comfort Grip",
            "Fine Tip"
        ]
    },

    {
        id:120,
        name:"Creative Study Kit",
        category:"Gift Boxes",
        brand:"Paper Petals",
        description:
        "Complete stationery starter kit for students.",
        price:1499,
        discount:25,
        rating:5.0,
        stock:20,
        image:"../assets/images/products/study-kit.jpg",

        features:[
            "Notebook",
            "Pens",
            "Sticky Notes",
            "Planner Included"
        ]
    }
];

        
