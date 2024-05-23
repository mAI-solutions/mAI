import { Stack, ScrollArea } from '@mantine/core';
import Post from './Post';
import classes from './Noticias.module.css';

const data = [
  {
    title: "Global Markets Rally as Tech Stocks Surge",
    desc: "Tech stocks led a rally in global markets today, with major indices showing significant gains. Analysts attribute the surge to positive earnings reports and increased investor confidence.",
    siteName: "Financial Times",
    img: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=640&h=420&dpr=1',
    ago: "Hace 2 horas"
  },
  {
    title: "New Study Reveals the Benefits of a Plant-Based Diet",
    desc: "A comprehensive study published today highlights the numerous health benefits of adopting a plant-based diet. Researchers found significant improvements in cardiovascular health and reduced risk of chronic diseases.",
    siteName: "Health News Daily",
    img: 'https://images.pexels.com/photos/4032991/pexels-photo-4032991.jpeg?auto=compress&cs=tinysrgb&w=640&h=420&dpr=1',
    ago: "Hace 5 horas"
  },
  {
    title: "Exploring the Ancient Ruins of Machu Picchu",
    desc: "Join us on a journey to the ancient ruins of Machu Picchu, one of the most iconic archaeological sites in the world. Discover the history and mysteries of this fascinating destination.",
    siteName: "Travel Weekly",
    img: 'https://images.pexels.com/photos/16950469/pexels-photo-16950469/free-photo-of-machu-picchu-and-grazing-lamas.jpeg?auto=compress&cs=tinysrgb&w=640&h=420&dpr=1',
    ago: "Hace 1 día"
  },
  {
    title: "Innovations in Renewable Energy Technology",
    desc: "The renewable energy sector continues to innovate with new technologies aimed at increasing efficiency and reducing costs. This article explores the latest advancements in solar and wind energy.",
    siteName: "Green Tech Journal",
    img: 'https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg?auto=compress&cs=tinysrgb&w=640&h=420&dpr=1',
    ago: "Hace 3 días"
  },
  {
    title: "The Rise of Esports: From Hobby to Professional Sport",
    desc: "Esports has grown from a niche hobby to a global phenomenon, with professional leagues, large prize pools, and millions of fans. This article examines the rise of competitive gaming and its impact on the sports industry.",
    siteName: "Sports Insider",
    img: 'https://images.pexels.com/photos/6125330/pexels-photo-6125330.jpeg?auto=compress&cs=tinysrgb&w=640&h=420&dpr=1',
    ago: "Hace 1 semana"
  }
]

const Noticias = () => {
  return (
    <ScrollArea h={'420'} classNames={classes} >
      <Stack gap='lg' className={classes.stack}>
        {data.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </Stack>
    </ScrollArea>
  )
}

export default Noticias