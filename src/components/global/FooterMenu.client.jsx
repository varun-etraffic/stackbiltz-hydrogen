// @ts-expect-error @headlessui/react incompatibility with node16 resolution
// import {Disclosure} from '@headlessui/react';
import {Link} from '@shopify/hydrogen';

/**
 * A server component that specifies the content of the footer on the website
 */
export function FooterMenu({menu, newmenu, customermenu}) {
  const styles = {
    section: 'grid gap-4',
    nav: 'grid gap-2 pb-6',
  };

  return (
    <div className={`flex w-full flex-wrap`}>
      <div className={`max-h-fit md:w-1/3 lg:w-1/3 sm:w-full`}>
          <nav className={`${styles.nav} text-[#a09e99]`}>
            {menu?.items.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                target={item.target}
              >
                {item.title}
              </Link>
            ))}
          </nav>
      </div>

      <div className={`max-h-fit md:w-1/3 lg:w-1/3 sm:w-full`}>
          <nav className={`${styles.nav} text-[#a09e99]`}>
            {newmenu?.items.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                target={item.target}
              >
                {item.title}
              </Link>
            ))}
          </nav>
      </div>

      <div className={`max-h-fit md:w-1/3 lg:w-1/3 sm:w-full`}>
          <nav className={`${styles.nav} text-[#a09e99]`}>
            {customermenu?.items.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                target={item.target}
              >
                {item.title}
              </Link>
            ))}
          </nav>
      </div>
    </div>
  );
}
