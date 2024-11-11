import { BiSolidUserPlus } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdAspectRatio } from "react-icons/md";

export const topDealUsers = [
    {
        id: 1,
        img: "https://img.freepik.com/free-photo/close-up-beautiful-woman-face-with-natural-makeup-relaxed-expression-standing-beige-backgr_1258-64561.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722643200&semt=ais_hybrid",
        username: "Saranya",
        email: "saranya123@gmail.com",
        amount: "500.78",
    },
    {
        id: 2,
        img: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
        username: "Sangu",
        email: "sangu123@gmail.com",
        amount: "450.90",
    },
    {
        id: 3,
        img: "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluc3RhZ3JhbSUyMHBob3RvfGVufDB8fDB8fHww",
        username: "Subanu",
        email: "subanu123@gmail.com",
        amount: "670.80",
    },
    {
        id: 4,
        img: "https://media.istockphoto.com/id/1126249654/photo/mexican-woman-portrait.webp?b=1&s=170667a&w=0&k=20&c=LDdvubIBle9x0gQq0LMe4DfeqOUFUUZBy9qoz-GMk_Y=",
        username: "Santhiya",
        email: "santhiya123@gmail.com",
        amount: "570.80",
    },
    {
        id: 5,
        img: "https://t3.ftcdn.net/jpg/03/14/08/62/360_F_314086283_d3JK1A3D3Ot39bm12RXjg7KdaIjUthWM.jpg",
        username: "Surya",
        email: "surya123@gmail.com",
        amount: "650.90",
    },
    {
        id: 6,
        img: "https://www.everypixel.com/preview_collections/20231127/people_of_the_world_vol.2_64",
        username: "Supri",
        email: "supri123@gmail.com",
        amount: "450.70",
    },
    {
        id: 7,
        img: "https://drmarkdoyle.com.au/wp-content/uploads/2022/09/perfect-face.jpg",
        username: "Anu sri",
        email: "anu123@gmail.com",
        amount: "760.80",
    }
];

export const chartBoxUsers = {
    color: "#8884d8",
    icon: <BiSolidUserPlus />,
    title: "Total Users",
    dataKey: "users",
    number: "13,334",
    percentage: 75,
    chartData: [
        { name: "Sun", users: 400 },
        { name: "Mon", users: 600 },
        { name: "Tue", users: 500 },
        { name: "Wed", users: 850 },
        { name: "Thu", users: 450 },
        { name: "Fri", users: 600 },
        { name: "Sat", users: 750 },
    ],
};

export const chartBoxVolunteers = {
    color: "skyblue",
    icon: <BiSolidUserPlus />,
    title: "Total Volunteers",
    dataKey: "volunteers",
    number: "5,789",
    percentage: 55,
    chartData: [
        { name: "Sun", volunteers: 500 },
        { name: "Mon", volunteers: 800 },
        { name: "Tue", volunteers: 550 },
        { name: "Wed", volunteers: 600 },
        { name: "Thu", volunteers: 450 },
        { name: "Fri", volunteers: 500 },
        { name: "Sat", volunteers: 650 },        
    ],
};

export const chartBoxRevenue = {
    color: "teal",
    icon: <FaMoneyBillTrendUp />,
    title: "Total Revenue",
    dataKey: "revenue",
    number: "47.434",
    percentage: -12,
    chartData: [
        { name: "Sun", revenue: 400 },
        { name: "Mon", revenue: 800 },
        { name: "Tue", revenue: 550 },
        { name: "Wed", revenue: 700 },
        { name: "Thu", revenue: 850 },
        { name: "Fri", revenue: 500 },
        { name: "Sat", revenue: 350 },
    ],
};

export const chartBoxConversion = {
    color: "gold",
    icon: <MdAspectRatio />,
    title: "Total Ratio",
    dataKey: "ratio",
    number: "2.6",
    percentage: 10,
    chartData: [
        { name: "Sun", ratio: 400 },
        { name: "Mon", ratio: 600 },
        { name: "Tue", ratio: 500 },
        { name: "Wed", ratio: 700 },
        { name: "Thu", ratio: 400 },
        { name: "Fri", ratio: 550 },
        { name: "Sat", ratio: 600 },
    ],
};

export const barChartBoxVisits = {
    title: "Total Visits",
    color: "#8884d8",
    dataKey: "visits",
    chartData: [
        { name: "Sun", visits: 4000 },
        { name: "Mon", visits: 6000 },
        { name: "Tue", visits: 5000 },
        { name: "Wed", visits: 7000 },
        { name: "Thu", visits: 4000 },
        { name: "Fri", visits: 5500 },
        { name: "Sat", visits: 6000 },
    ],
};

export const barChartBoxDonations = {
    title: "Total Donations",
    color: "#8884d8",
    dataKey: "donations",
    chartData: [
        { name: "Sun", donations: 3500 },
        { name: "Mon", donations: 5500 },
        { name: "Tue", donations: 5400 },
        { name: "Wed", donations: 6900 },
        { name: "Thu", donations: 3500 },
        { name: "Fri", donations: 5700 },
        { name: "Sat", donations: 6500 },
    ],
};

export const userRows = [
    {
      id: 1,
      img: "https://randomuser.me/api/portraits/women/1.jpg",
      lastName: "Keerthi",
      firstName: "Anu",
      email: "anu123@gmail.com",
      phone: "9876543210",
    //   createdAt: "05-08-2024",
      verified: true,
    },
    {
      id: 2,
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      lastName: "Sharma",
      firstName: "Ravi",
      email: "ravi.sharma@example.com",
      phone: "9876543220",
    //   createdAt: "04-08-2024",
      verified: false,
    },
    {
      id: 3,
      img: "https://randomuser.me/api/portraits/women/3.jpg",
      lastName: "Patel",
      firstName: "Priya",
      email: "priya.patel@example.com",
      phone: "9876543230",
    //   createdAt: "03-08-2024",
      verified: true,
    },
    {
      id: 4,
      img: "https://randomuser.me/api/portraits/men/4.jpg",
      lastName: "Singh",
      firstName: "Amit",
      email: "amit.singh@example.com",
      phone: "9876543240",
    //   createdAt: "02-08-2024",
      verified: false,
    },
    {
      id: 5,
      img: "https://randomuser.me/api/portraits/women/5.jpg",
      lastName: "Mehta",
      firstName: "Sunita",
      email: "sunita.mehta@example.com",
      phone: "9876543250",
    //   createdAt: "01-08-2024",
      verified: true,
    }
  ];
  