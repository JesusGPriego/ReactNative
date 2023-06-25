export class Place
{
    constructor( title, imageUri, location, id )
    {
        this.title = title;
        this.imageUri = imageUri;
        this.address = location.address;
        this.location = { longitude: location.longitude, latitude: location.latitude };
        this.id = id;

    }
}