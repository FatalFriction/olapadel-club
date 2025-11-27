import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { SwordIcon, UserCheck, Users } from "lucide-react";
import Image from "next/image";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>
            <SwordIcon
              size={50}
              color="white"
              className="bg-primary rounded-full p-1"
            />
          </CardTitle>
          <CardTitle>Community Matches</CardTitle>
          <CardDescription>
            Weekly or monthly friendly matches to connect, compete, and enjoy
            the game.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/Social.jpg"
            alt="Community Matches Card Image"
            width={570}
            height={570}
            loading="lazy"
            className="rounded-3xl"
          />
        </CardContent>
      </Card>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>
            <Users
              size={50}
              color="white"
              className="bg-primary rounded-full p-1"
            />
          </CardTitle>
          <CardTitle>Group Training Sessions</CardTitle>
          <CardDescription>
            Professional coaching focused on technique, structured drills, and
            match strategy.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="relative w-full h-[450px] overflow-hidden rounded-3xl">
          <Image
            src="/sosmed.png"
            alt="Community Matches Card Image"
            fill
            className="object-cover"
            loading="lazy"
          />
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>
            <UserCheck
              size={50}
              color="white"
              className="bg-primary rounded-full p-1"
            />
          </CardTitle>
          <CardTitle>1 on 1 Coaching</CardTitle>
          <CardDescription>
            Private one on one coaching focused solely on your game and
            progress.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[450px] overflow-hidden rounded-3xl">
            <Image
              src="/Coach.jpg"
              alt="Community Matches Card Image"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card>
      <Image
        src="/OLA_PNG-VERT-CONTRAST.png"
        alt="Background"
        width={160}
        height={160}
        priority
        className="mx-auto my-auto mt-10"
      />
    </div>
  );
};

export default CardContainer;
