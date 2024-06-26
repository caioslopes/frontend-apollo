import DrawerAccount from "./components/DrawerAccount/DrawerAccount";
import CardEstablishment from "./components/CardEstablishment/CardEstablishment";
import CardPlaylist from "./components/CardPlaylist/CardPlaylist";
import DrawerLinkSpotify from "./components/DrawerLinkSpotify/DrawerLinkSpotify";

type Props = {
  params: {
    code: string;
  };
};

export default async function Home({ params }: Props) {
  const authorization_code = params.code;

  return (
    <div className="space-y-8">
      <div className="flex w-full justify-between">
        João Santos
        <DrawerAccount />
      </div>
      <CardEstablishment />
      <CardPlaylist variant="notHasCode" />
      <DrawerLinkSpotify />
    </div>
  );
}
