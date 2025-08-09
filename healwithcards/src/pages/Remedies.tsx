import PerPageComponent from '@/components/PerPageComponent';
const slides =  [
    {heading: 'Balance Your Mind, Body & Spirit with Remedies', subHeading: 'Remedies to Remove Negative Energy'},
    {heading: 'Healing Remedies from the Tarot and Beyond', subHeading: 'Tarot-Based Remedies for Love & Career'},
    {heading: 'Spiritual Remedies for Everyday Challenges', subHeading: 'Simple Healing Practices You Can Do at Home'},
]


  const services = [
    {
      heading: "One Question @151 Rs",
      subHeading: "Get a quick, clear answer to your most pressing concern.",
      img: "https://images.unsplash.com/photo-1621923647893-901f834b3e6a?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 151,
    },
    {
      heading: "Three Question @251 Rs",
      subHeading:
        "Dive deeper into different areas of your life with focused insights.",
      img: "https://images.unsplash.com/photo-1627764574958-fb54cd7d7448?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFyb3R8ZW58MHx8MHx8fDI%3D",
      price: 251,
    },
    {
      heading: "Five Question @351 Rs",
      subHeading:
        "Explore a complete reading covering multiple aspects for full clarity.",
      img: "https://images.unsplash.com/photo-1637757969279-c4d028905131?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRhcm90fGVufDB8fDB8fHwy",
      price: 351,
    },
  ];


const Remedies = () => {
  return (
     <PerPageComponent
      services={services}
      slides={slides}
      name={"Remedies"}
    />
  )
}

export default Remedies