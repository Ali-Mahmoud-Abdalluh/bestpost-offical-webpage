import { joinPaths } from "@remix-run/router";
import {
    vi, publications, gd, marketing, media, laserengraving, qulity, honesty, facebook,
    instagram,
    twitter,
    linkedIn,
    tiktok,
    youtube,
    googleblus,
    blog1,
    blog2,
    blog3,
    blog4,
    blog5,
    blog6,
    blog7,
    blog8,
    blog9,
    blog10,
    blog11,
    blog12,
    blog13,
    blog14,
    blog15,
    blog16,
    blog17,
    blog18,
    blog19,
    blog20,
    blog21,
    blog22,
    author,
    h_card_image1,
    h_card_image2,
    h_card_image4,
    h_card_image3,
} from "../assets";
export const navLinks = [
    {
        id: "home",
        title: "Home",
        to: '/bestpost-offical-webpage',
    },
    {
        id: "services",
        title: "Services",
        to: '/bestpost-offical-webpage/services',

    },
    {
        id: "products",
        title: "Products",
        to: '/bestpost-offical-webpage/product'
    },
    {
        id: "tutorials",
        title: "Tutorials",
        to: '/bestpost-offical-webpage/tutorials',
    },
    {
        id: "blog",
        title: "Blog",
        to: '/bestpost-offical-webpage/blog',

    },
    {
        id: "aboutus",
        title: "About",
        to: '/bestpost-offical-webpage/about',

    },
];

export const stats = [
    {
        id: "employee",
        value: 50,
        title: "Employee",
    },
    {
        id: "trainee",
        value: 100,
        title: "Trainee",
    },
    {
        id: "partners",
        value: 5,
        title: "Partners",
    },
    {
        id: "client",
        value: 50,
        title: "client",
    },
];

export const services = [
    {
        id: "visual-identity",
        title: "Visual Identity",
        icon: vi,
        description: "Visual identity contributes to enhancing your presence in the market, as most customers prefer to deal with famous brands and visual identities; Don't miss the chance to be one of them.",
    },
    {
        id: "publications",
        title: "Publications",
        icon: publications,
        description: "At BestPost, we have developed all the advertising and advertising business of ideas and products by integrating them with modern technology that builds you a firm foundation with your customers.",
    },
    {
        id: "graphic-design",
        title: "Graphic Design",
        icon: gd,
        description: "Graphics are your brand’s brush that paints your marketing messages with extreme creativity and professionalism so that your audience can see and feel it every time they come across it.",
    },
    {
        id: "marketing",
        title: "Marketing",
        icon: marketing,
        description: "Because you need marketing to prepare a strategic plan through it; do you know where you are And where are you going? And to whom are you going? And what when you reach the summit?",
    },
    {
        id: "media",
        title: "Media",
        icon: media,
        description: "At bestpost we consider audiovisual content as the capital invested in increasing the impact on your brand image in the minds of your audience.",
    },
    {
        id: "laser-engraving",
        title: "Laser Engraving",
        icon: laserengraving,
        description: "You can use the laser engraving technology in decoration, gifts, leather and wooden crafts and many different materials, as it is characterized by speed and high accuracy.",
    },

];

export const whybestpost = [
    {
        number: "01",
        icon: qulity,
        content: "We offer you quality in performance, accuracy in implementation, and punctuality.",
    },
    {
        number: "02",
        icon: honesty,
        content: "Because we value your integrity and provide you with security and credibility in your dealings with us.",
    },
    {
        number: "03",
        icon: qulity,
        content: "We offer you quality in performance, accuracy in implementation, and punctuality.",
    },
    {
        number: "04",
        icon: honesty,
        content: "Because we are constantly offering special and exclusive offers, discounts and gifts.",
    },
    {
        number: "05",
        icon: qulity,
        content: "Because transparency is an essential pillar of the work team, you will be aware of everything that is being done.",
    },
    {
        number: "06",
        icon: honesty,
        content: "Profitability is not our primary goal as much as meeting your needs, implementing your requests, and earning your loyalty first.",
    },
    {
        number: "07",
        icon: honesty,
        content: "Because we have great experience in the field of leadership and management, which are the pillars and basis of business to provide more distinguished thought and services.",
    },
    {
        number: "08",
        icon: honesty,
        content: "Because we have a selection of experts and consultants in the field of management, marketing, advertising and branding.",
    },
    {
        number: "09",
        icon: honesty,
        content: "Because we believe that our customers are a wealth that we preserve with an integrated team of friendly and open-minded people.",
    },
];

export const allServices = [
    {
        name: "visual identity",
        link: "#",
    },
    {
        name: "publication",
        link: "#",
    },
    {
        name: "graphic",
        link: "#",
    },
    {
        name: "marketing",
        link: "#",
    },
    {
        name: "media",
        link: "#",
    },
    {
        name: "laser engraving",
        link: "#",
    },
    {
        name: "occasion gifts",
        link: "#",
    },
    {
        name: "youtube",
        link: "#",
    },
    {
        name: "manufacture and installation of signs and facades",
        link: "#",
    },
    {
        name: "management and marketing consultancy",
        link: "#",
    },
    {
        name: "establishing and structuring projects",
        link: "#",
    },
    {
        name: "preparing and implementing exhibition and conference supplies",
        link: "#",
    }
]


export const aboutCompany = [
    {
        name: "who are we?",
        link: "#"
    },
    {
        name: "Team",
        link: "#"
    },
    {
        name: "privacy policy",
        link: "#",
    },
    {
        name: "Terms and Agreements",
        link: "#",
    }
]

export const socialMediaLinks = [
    {
        platform: 'facebook',
        icon: facebook,
        link: "#",
    },
    {
        platform: "instagram",
        icon: instagram,
        link: "#",
    },
    {
        platform: "twitter",
        icon: twitter,
        link: "#",
    },
    {
        platform: "linkedIn",
        icon: linkedIn,
        link: "#",
    },
    {
        platform: "tiktok",
        icon: tiktok,
        link: "#",
    },
    {
        platform: "youtube",
        icon: youtube,
        link: "#",
    },
    {
        platform: "googleblus",
        icon: googleblus,
        link: "#",
    }
]


export const filterMenu = [
    {
        Categories: [
            "All articles",
            "Visual identity",
            "Establishing and structuring projects",
            "Manufacture and installation of signs and facades",
            "Marketing",
            "Preparing and implementing exhibition and conference supplies",
            "Occasion gifts",
            "Media",
            "Management and marketing consultancy",
            "Laser engraving",
            "Graphic",
            "Youtube",
        ]
    },
    {
        Keywords: [
            "Establishing and structuring projects",
            "Manufacture and installation of signs and facades",
            "interface designs",
            "Tips",
            "Youtube",
            "Occasion Gifts",
            "3D",
            "ideas",
            "laser engraving",
            "Graphic",
        ]
    }

]

export const last_blogs = [
    {
        id: 1,
        category: 'Media',
        shortDescription: "This text is example for text",
        smallImage: blog1,
    },
    {
        id: 2,
        category: "Aircraft construction and structuring",
        shortDescription: "This text is an example of a text that can be replaced in the same space.",
        smallImage: blog2,
    },
    {
        id: 3,
        category: "Youtube",
        shortDescription: 'This text is an example of text that can be replaced in the same space.',
        smallImage: blog3,
    },
    {
        id: 4,
        category: 'Publications',
        shortDescription: "This text is an example of text that can be replaced in the same space This text is an example of text that can be replaced in the same space.",
        smallImage: blog4,
    },
    {
        id: 5,
        category: 'Graphic',
        shortDescription: "This text is an example of text that can be replaced in the same space.",
        smallImage: blog5,
    },
    {
        id: 6,
        category: "Laser engraving",
        shortDescription: "This text is an example of text that can be replaced in the same space This text is an example of text that can be replaced in the same space.",
        smallImage: blog6,
    },
    {
        id: 7,
        category: "Marketing",
        shortDescription: "This text is an example of text that can be replaced in the same space.",
        smallImage: blog7,
    }
]


export const important_categories = [
    'Visual identity',
    'Publications',
    'Graphic',
    'Marketing',
    'Media',
    'Laser engraving',
    'Manufacture and installation of signs and facades',
    'Management and marketing consultancy',
    'Establishing and structuring projects',
    'Preparing and implementing exhibition and conference supplies',
    'Youtube',
]


export const latest_marketing_blogs = [
    {
        "latest marketing blogs": [
            'This text is an example of text that can be replaced here in the same space.',
            'This text is an example of text that can be replaced here in the same space.',
            'This text is an example of text that can be replaced here in the same space.',
            'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space.',
            'This text is an example of text that can be replaced here in the same space.'
        ]
    }
]

export const latest_designs_blogs = [
    {
        "latest designs blogs": [
            'This text is an example of text that can be replaced here in the same space.',
            'This text is an example of text that can be replaced here in the same space.',
            'This text is an example of text that can be replaced here in the same space.',
            'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space.',
            'This text is an example of text that can be replaced here in the same space.'
        ]
    }
]
export const latest_laser_engraving_blogs = [
    {
        "latest laser engraving blogs": [
            'This text is an example of text that can be replaced here in the same space.',
            'This text is an example of text that can be replaced here in the same space.',
            'This text is an example of text that can be replaced here in the same space.',
            'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space.',
            'This text is an example of text that can be replaced here in the same space.'
        ]
    }
]


export const blogs_card_data = [
    {
        id: 1,
        image: blog8,
        watched: '170k',
        likes: 3223,
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 2,
        likes: 323,
        image: blog9,
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        author_image: author,
        watched: '153k',
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 3,
        image: blog10,
        likes: 3223,
        watched: '150k',
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 4,
        image: blog11,
        watched: '180k',
        likes: 3223,
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 5,
        image: blog12,
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        likes: 3223,
        watched: '250k',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    }
]

export const h_card_data = [
    {
        id: 1,
        category: 'Graphic',
        shortDescription: "This text is an example of text that can be replaced in the same space.",
        smallImage: h_card_image1,
    },
    {
        id: 2,
        category: "Establishing and structuring projects",
        shortDescription: "This text is an example of text that can be replaced in the same space.",
        smallImage: h_card_image4,
    },
]


export const blogs_card_data2 = [
    {
        id: 1,
        image: blog13,
        watched: '170k',
        likes: 3223,
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 2,
        likes: 323,
        image: blog14,
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        author_image: author,
        watched: '153k',
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 3,
        image: blog15,
        likes: 3223,
        watched: '150k',
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 4,
        image: blog16,
        watched: '180k',
        likes: 3223,
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 5,
        image: blog17,
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        likes: 3223,
        watched: '250k',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    }
]


export const h_card_data2 = [
    {
        id: 1,
        category: 'Publications',
        shortDescription: "This text is an example of text that can be replaced in the same space.",
        smallImage: h_card_image3,
    },
    {
        id: 2,
        category: "Manufacture and installation of signs and facades",
        shortDescription: "This text is an example of text that can be replaced in the same space.",
        smallImage: h_card_image2,
    },
]

export const blogs_card_data3 = [
    {
        id: 1,
        image: blog18,
        watched: '170k',
        likes: 3223,
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 2,
        likes: 323,
        image: blog19,
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        author_image: author,
        watched: '153k',
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 3,
        image: blog20,
        likes: 3223,
        watched: '150k',
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 4,
        image: blog21,
        watched: '180k',
        likes: 3223,
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 5,
        image: blog22,
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        likes: 3223,
        watched: '250k',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 6,
        image: blog20,
        likes: 3223,
        watched: '150k',
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 7,
        image: blog21,
        watched: '180k',
        likes: 3223,
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 8,
        image: blog22,
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        likes: 3223,
        watched: '250k',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
    {
        id: 9,
        image: blog18,
        watched: '170k',
        likes: 3223,
        title: "This text is an example of a text that can be replaced here in the same space",
        author: 'by Mohamed Hamada',
        author_image: author,
        time: "6 minutes ago",
        description: 'This text is an example of text that can be replaced here in the same space This text is an example of text that can be replaced here in the same space',
    },
]