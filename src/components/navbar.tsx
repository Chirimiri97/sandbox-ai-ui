import { useState } from "react";

// Icons.
import {
  IconLayoutSidebarLeftCollapse,
  IconPlus,
  IconMessageDots,
  IconAlbum,
  IconChevronDown,
} from "@tabler/icons-react";

// ShadCN Components..
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <header
      className={`flex w-16 flex-col gap-y-4 overflow-x-hidden border-r p-4 text-nowrap transition-all ${isExpanded ? "w-2xs!" : ""}`}
    >
      <div className="flex items-center gap-3.5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className={`${!isExpanded ? "rotate-180" : ""}`}
              size={"icon-sm"}
              onClick={() => {
                setIsExpanded((prev) => !prev);
              }}
            >
              <IconLayoutSidebarLeftCollapse />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{isExpanded ? "Collapse" : "Expand"}</p>
          </TooltipContent>
        </Tooltip>

        <p className="font-josefin text-xl font-bold">Sandbox GPT</p>
      </div>

      <ul className="mt-4 h-full space-y-4 text-sm">
        <li className="flex items-center gap-3.5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size={"icon-sm"} variant={"outline"}>
                <IconPlus />
              </Button>
            </TooltipTrigger>
            {!isExpanded && (
              <TooltipContent side="right">New Chat</TooltipContent>
            )}
          </Tooltip>

          <p>New Chat</p>
        </li>
        <li className="flex items-center gap-3.5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size={"icon-sm"} variant={"outline"}>
                <IconMessageDots />
              </Button>
            </TooltipTrigger>
            {!isExpanded && <TooltipContent side="right">Chats</TooltipContent>}
          </Tooltip>

          <p>Chats</p>
        </li>
        <li className="flex items-center gap-3.5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size={"icon-sm"} variant={"outline"}>
                <IconAlbum />
              </Button>
            </TooltipTrigger>
            {!isExpanded && (
              <TooltipContent side="right">Library</TooltipContent>
            )}
          </Tooltip>

          <p>Library</p>
        </li>
      </ul>

      <Profile />
    </header>
  );
}

function Profile() {
  return (
    <div className="mt-auto flex items-center gap-3.5">
      <Button size={"icon-sm"} className="rounded-full">
        <Avatar className="">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Button>

      <div className="text-sm">
        <p className="font-medium">Chirag Jain</p>
        <p className="text-xs font-light">Publicis Re:Sources</p>
      </div>

      <Button className="ml-auto" variant={"ghost"} size={"icon-sm"}>
        <IconChevronDown />
      </Button>
    </div>
  );
}

export default Navbar;
