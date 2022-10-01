import {useUrl, Link} from '@shopify/hydrogen';
import {Section, Heading, FooterMenu, CountrySelector, TwitterIcon} from '~/components';
import { FacebookFIcon } from '../icons/FacebookFIcon';
import { InstagramIcon } from '../icons/InstagramIcon';
import { PhoneIcon } from '@heroicons/react/solid'

/**
 * A server component that specifies the content of the footer on the website
 */
export function Footer({menu, newmenu, customermenu}) {
  const {pathname} = useUrl();

  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : null;

  const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`;

  return (
    <Section
      divider={isHome ? 'none' : 'top'}
      as="footer"
      role="contentinfo"
      display="flex"
      className={`flex-wrap bg-black`}
    >
      <div className={`md:w-1/2 lg:w-1/2 sm:w-full`}>
        <div className={`w-full mb-6`}>
          <Heading size="heading" as="h3" className={`text-white`}>Explore</Heading>
        </div>
        <FooterMenu menu={menu} newmenu={newmenu} customermenu={customermenu}/>
      </div>

      <div className={`md:w-1/2 lg:w-1/2 sm:w-full`}>
        <div className={`w-full mb-6`}>
          <Heading size="heading" as="h3" className={`italic text-white`}>Stay Connected</Heading>
          <div className={`social-wrapper`}>
            <div className={`social-items inline-flex w-full align-middle`}>
              <div className={`inline-flex phone-icon w-1/2`}>
                <PhoneIcon className={`text-white w-1/2`}/>
                <a className={`inline text-[#a09e99] w-1/2`} href="tel:12125552323">+(1) 212.555.2323</a>
              </div>

              <div className={`inline-flex w-1/2`}>
                <div className={`facebook-icon w-6`}>
                  <FacebookFIcon/>
                </div>

                <div className={`twitter-icon w-6`}>
                  <TwitterIcon/>
                </div>

                <div className={`instagram-icon w-6`}>
                  <InstagramIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="grid gap-4 w-full md:max-w-[335px] md:ml-auto">
        <Heading size="lead" className="cursor-default" as="h3">
          Country
        </Heading>
        <CountrySelector />
      </section> */}

      <div className={`w-full text-center text-[#a09e99]`}>
        <div className='footer-logo mb-4'>
          <img src="https://cdn.shopify.com/s/files/1/0588/2789/9031/files/Group_218.png?v=1659684379" className="md:mx-auto"/>
        </div>
         &copy; {new Date().getFullYear()} LEVOUR | <Link className="inline" to="/pages/legal">Legal</Link> | <Link className="inline" to="/pages/terms">Terms</Link> | Making Brands Work<sup>TM</sup>
      </div>
    </Section>
  );
}
