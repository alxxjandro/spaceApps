import Everthing from "@/components/Everthing";
import { promises as fs } from 'fs';

export default async function Home() {
  const moonFile = await fs.readFile(process.cwd() + '/public/moon.json', 'utf8');
  const moonData = JSON.parse(moonFile);

  const marsFile = await fs.readFile(process.cwd() + '/public/mars.json', 'utf8');
  const marsData = JSON.parse(marsFile);

  return (
    <main>
      <Everthing moonData={moonData} marsData={marsData}/>
    </main>
  );
}
