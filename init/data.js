const simplelisting = [
    {
        title: "Luxury Apartment",
        description: "You can live comfort and love this house",
        image: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40000,
        location: "Lahore",
        country: "Pakistan"
    },
    {
        title: "Cozy Apartment",
        description: "A cozy and affordable apartment in the city center.",
        image: "https://plus.unsplash.com/premium_photo-1748070893502-da363df042f5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25000,
        location: "Karachi",
        country: "Pakistan"
    },
    {
        title: "Luxury Villa",
        description: "Experience luxury living with a private pool and garden.",
        image: "https://plus.unsplash.com/premium_photo-1748065034991-576fd0763584?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 120000,
        location: "Islamabad",
        country: "Pakistan"
    },
    {
        title: "Beachside Cottage",
        description: "Perfect getaway cottage near the sea.",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 50000,
        location: "Gwadar",
        country: "Pakistan"
    },
    {
        title: "Mountain Retreat",
        description: "Peaceful retreat with scenic mountain views.",
        image: "https://images.unsplash.com/photo-1568605115459-4b731184f961?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 70000,
        location: "Murree",
        country: "Pakistan"
    },
    {
        title: "Urban Studio",
        description: "Minimalist studio apartment ideal for professionals.",
        image: "https://images.unsplash.com/photo-1724931420584-d360afc3e1f8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 20000,
        location: "Faisalabad",
        country: "Pakistan"
    },
    {
        title: "Countryside Home",
        description: "Relax in a peaceful countryside house.",
        image: "https://plus.unsplash.com/premium_photo-1733514433449-67ea470bcfa6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 30000,
        location: "Multan",
        country: "Pakistan"
    },
    {
        title: "Skyline Penthouse",
        description: "Top floor penthouse with breathtaking views.",
        image: "https://plus.unsplash.com/premium_photo-1733514433443-546978b961c2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150000,
        location: "Karachi",
        country: "Pakistan"
    },
    {
        title: "Family Villa",
        description: "Spacious villa perfect for family vacations.",
        image: "https://plus.unsplash.com/premium_photo-1733514691417-1e31ea6ec492?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 90000,
        location: "Lahore",
        country: "Pakistan"
    },
    {
        title: "Boutique Suite",
        description: "Stylish boutique suite with modern facilities.",
        image: "https://plus.unsplash.com/premium_photo-1746327707391-d095ac370b9c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 35000,
        location: "Islamabad",
        country: "Pakistan"
    },
    {
        title: "Riverside Cottage",
        description: "Charming riverside stay for a peaceful holiday.",
        image: "https://plus.unsplash.com/premium_photo-1734545294150-3d6c417c5cfb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 45000,
        location: "Kashmir",
        country: "Pakistan"
    },
    {
        title: "Historic House",
        description: "Stay in a beautifully restored historic house.",
        image: "https://images.unsplash.com/photo-1628133287836-40bd5453bed1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 60000,
        location: "Lahore",
        country: "Pakistan"
    },
    {
        title: "Garden Apartment",
        description: "Modern apartment with a lovely private garden.",
        image: "https://images.unsplash.com/photo-1631238426783-0fa98b5fb3be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 28000,
        location: "Islamabad",
        country: "Pakistan"
    },
    {
        title: "Rustic Lodge",
        description: "Escape the city in this rustic and cozy lodge.",
        image: "https://plus.unsplash.com/premium_photo-1687960116506-f31f84371838?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40000,
        location: "Hunza",
        country: "Pakistan"
    },
    {
        title: "Minimalist Loft",
        description: "Bright and open loft for modern travelers.",
        image: "https://plus.unsplash.com/premium_photo-1687960116764-f3526d29dae6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 22000,
        location: "Karachi",
        country: "Pakistan"
    },
    {
        title: "Eco-Friendly Cabin",
        description: "Sustainable living in a wooden eco-cabin.",
        image: "https://plus.unsplash.com/premium_photo-1682377521724-ececd24a83b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 32000,
        location: "Skardu",
        country: "Pakistan"
    },
    {
        title: "Elegant Mansion",
        description: "Live like royalty in this elegant mansion.",
        image: "https://images.unsplash.com/photo-1741287541049-e6814b67f01b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 250000,
        location: "Islamabad",
        country: "Pakistan"
    },
    {
        title: "Tiny House",
        description: "Compact yet comfortable tiny house experience.",
        image: "https://images.unsplash.com/photo-1563569612948-9bd14a098036?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 15000,
        location: "Murree",
        country: "Pakistan"
    },
    {
        title: "Luxury Tent",
        description: "Glamping in style under the stars.",
        image: "https://images.unsplash.com/photo-1741287541081-7d9b6d8903de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 18000,
        location: "Hunza",
        country: "Pakistan"
    },
    {
        title: "Farmhouse Stay",
        description: "Relaxing farmhouse surrounded by nature.",
        image: "https://images.unsplash.com/photo-1712734206195-16f9bf44516a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 50000,
        location: "Sialkot",
        country: "Pakistan"
    },
    {
        title: "Woodland Cabin",
        description: "Stay in the heart of nature with this cabin.",
        image: "https://plus.unsplash.com/premium_photo-1748283961404-344b0e09a993?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 36000,
        location: "Swat",
        country: "Pakistan"
    },
    {
        title: "Private Chalet",
        description: "Snowy mountain chalet for winter adventures.",
        image: "https://images.unsplash.com/photo-1686739518429-cd33541c6396?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 80000,
        location: "Naran",
        country: "Pakistan"
    },
    {
        title: "Sunny Studio",
        description: "Compact sunny studio for short-term stays.",
        image: "https://images.unsplash.com/photo-1742932944685-6ad13c3e43e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 18000,
        location: "Karachi",
        country: "Pakistan"
    },
    {
        title: "Nomad Nest",
        description: "Affordable stay for digital nomads.",
        image: "https://images.unsplash.com/photo-1724931420584-d360afc3e1f8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 14000,
        location: "Islamabad",
        country: "Pakistan"
    },
    {
        title: "Rooftop Loft",
        description: "Trendy loft with rooftop access and views.",
        image: "https://images.unsplash.com/photo-1568605115459-4b731184f961?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 27000,
        location: "Lahore",
        country: "Pakistan"
    },
    {
        title: "Seaside Bungalow",
        description: "Beachfront bungalow with open-air dining.",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 55000,
        location: "Gwadar",
        country: "Pakistan"
    },
    {
        title: "Traveler’s Pod",
        description: "Compact pod with modern amenities.",
        image: "https://plus.unsplash.com/premium_photo-1748283652785-7bafb88dd7bc?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 12000,
        location: "Islamabad",
        country: "Pakistan"
    },
    {
        title: "Desert Cabin",
        description: "Unique stay in the desert landscape.",
        image: "https://images.unsplash.com/photo-1565297032488-90722f09db62?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 30000,
        location: "Cholistan",
        country: "Pakistan"
    }
];

module.exports={data:simplelisting}
