import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
 
const menuItems = [
  {
    description:
      "ERP нь танд нягтлан бодох бүртгэл, худалдан авалт, борлуулалт,бараа материал, харилцагч нартай холбоотой тооцоо, мөнүйлдвэрлэлийн процесс эсвэл олон газар байрлах салбаруудынхаа үйлажиллагааг дэмжиж оновчтой арга барилаар удирдахад тань туслахбодит хяналтыг мэдрүүлэх болно. Салбаруудын үйл ажиллагааны хяналтыг цаг алдалгүй хийж бизнесийгдэмжинэ. Бүхий л үйл ажиллагаандаа бодит хяналт тавина. Шийдвэр гаргах явцыг хурдасгаж, зах зээлд үзүүлэх нөлөөллийгнэмэгдүүлнэ.Удирдлага хялбар байдлаар нийт хэлтэс, нэгжүүдийн талаархоновчтой мэдээлэл авна.",
  },
];
 
export default function AdvTHREE() {
  const [openMenu, setOpenMenu] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };
 
  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        <Button
          {...triggers}
          variant="text"
          className="flex items-center gap-3 text-white text-xs md:text-sm lg:text-xl font-semibold capitalize tracking-normal hover:text-blue-500"
        >
          Бизнесээ хөгжүүл{" "}
          <ChevronDownIcon
            strokeWidth={4}
            className={`h-3.5 w-3.5 transition-transform hover:text-blue-500 ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList
        {...triggers}
        className="hidden w-[36rem] gap-3 overflow-visible lg:grid"
      >
        <ul className="col-span-4 flex w-full flex-col gap-1">
          {menuItems.map(({ description }) => (
            <a href="#" key={description}>
              <MenuItem>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal text-justify font-semibold"
                >
                  {description}
                </Typography>
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}