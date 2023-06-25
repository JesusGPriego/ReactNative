import axios from "axios";


const GEOAPIFY_API_KEY = 'efa8cb271835445ba7c0fdec3677a5c7';
const LocationIQ_API_KEY = 'pk.07fc433beb07bdbceebcb209bd950b0c';

export const getMapPreview = ( lon, lat ) =>
{
    const mapPreview = `https://maps.geoapify.com/v1/staticmap?apiKey=${GEOAPIFY_API_KEY}&format=jpeg&center=lonlat:${lon},${lat}&marker=lonlat:${lon},${lat};color:red;size:large&zoom=17`;
    return mapPreview;
};

export const getAddress = async ( lat, lon ) =>
{
    const truncatedLat = lat.toFixed( 6 );
    const truncatedLon = lon.toFixed( 6 );

    const url = `https://us1.locationiq.com/v1/reverse?key=${LocationIQ_API_KEY}&lat=${truncatedLat}&lon=${truncatedLon}&format=json`;
    const response = await axios.get( url );
    const { address } = response.data;
    const humanAddress = `${address.neighbourhood || ''} ${address.road || ''}, ${address.county || ''}, ${address.city || ''}`;

    return humanAddress;
};