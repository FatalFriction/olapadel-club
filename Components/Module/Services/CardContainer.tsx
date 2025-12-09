import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { SwordIcon, UserCheck, Users } from "lucide-react";
import Image from "next/image";

const CardContainer = () => {
  return (
    <div className="
      grid grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-8 
      w-full
    ">
      <Card className="w-full max-w-md mx-auto">
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
            Weekly or monthly friendly matches to connect, compete, and enjoy the game.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/Social.jpg"
            alt="Community Matches Card Image"
            width={570}
            height={570}
            loading="lazy"
            className="rounded-3xl w-full h-[472px]"
          />
        </CardContent>
      </Card>

      <Card className="w-full max-w-md mx-auto">
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
            Professional coaching focused on technique, structured drills, and match strategy.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[450px] max-lg:h-[300px] overflow-hidden rounded-3xl">
            <Image
              src="/sosmed.png"
              alt="Group Training Session Image"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-md mx-auto">
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
            Private one on one coaching focused solely on your game and progress.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[450px] max-lg:h-[300px] overflow-hidden rounded-3xl">
            <Image
              src="/coach.jpg"
              alt="Coaching Image"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center items-center w-full">
        <Image
          src="/OLA_PNG-VERT-CONTRAST.png"
          alt="Brand Logo"
          width={160}
          height={160}
          priority
          className="mx-auto my-auto max-lg:w-28 max-lg:h-[350px]"
        />
      </div>
    </div>
  );
};

export default CardContainer;
