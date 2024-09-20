import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return ( 

        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/kit-piel-durazno" className="block">Kit piel durazno</Link>
                <Link href="/categories/kit-alto-relieve" className="block">Kit alto relieve</Link>
                <Link href="/categories/kit-diseno-infantil" className="block">Kit diseño infantil</Link>

            </PopoverContent>
        </Popover>
     );
}
 
export default ItemsMenuMobile;