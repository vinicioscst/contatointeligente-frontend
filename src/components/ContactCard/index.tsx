import { TUserContact } from "@/contexts/UserContext/@types";
import InfoIcon from "../icons/InfoIcon";
import Link from "next/link";

interface IContactCard {
  contact: TUserContact;
}

const ContactCard = ({ contact }: IContactCard) => {
  return (
    <div className="text-font-color w-full flex items-center justify-between gap-3 p-4 rounded-md">
      <div className="flex sm:items-center gap-2 sm:gap-8 flex-col sm:flex-row">
        <span className="text-base xm:text-lg">
          {contact.fullName}
        </span>
        <p className="text-sm">{contact.telephone}</p>
      </div>
      <div className="flex-grow border-t border-font-color w-20 hidden md:block mx-5"></div>
      <Link href={`/dashboard/contacts/${contact.id}`}>
        <InfoIcon stroke="#090D10" size={21} />
      </Link>
    </div>
  );
};

export default ContactCard;
