import {Text} from '~/components';

export function ProductGridBanner({id}) {
  return(
    <div id={id} className={`${id}`} style={{height: '100%', width: '100%'}}>
      <Text as="h3" style={{display: 'flex', alignItems: 'center',}}>{id}</Text>
    </div>
  );
}