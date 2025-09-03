import { X, DiamondPercent, Search, Bomb } from "lucide-react";
import { MoveRight, UserRoundCheck, ShoppingBag } from "lucide-react";
export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center gap-2 w-full h-8 bg-[#38CB89] relative">
        <DiamondPercent size={22} className="inline" />
        <p> 30% off storewide — Limited time!</p>
        <a href="#" className="underline">
          Shop Now
          <span className="pl-1">
            <MoveRight size={15} className="inline" />
          </span>
        </a>
      </div>
      <button className="absolute right-2 top-1">
        <X />
      </button>
      <nav className="flex justify-between items-center px-40 h-[60px]">
        <a>3legant.</a>
        <div>
          <ul className="flex gap-10">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <a>
                <Search />
              </a>
            </li>
            <li>
              <a>
                <UserRoundCheck />
              </a>
            </li>
            <li>
              <a>
                <ShoppingBag />
              </a>
            </li>
            <li>
              <a>
                <p>
                  <Bomb />
                </p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}
