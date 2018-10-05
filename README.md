# Convert SI Units

convert from widely used units into SI units.


### Docker

```bash
docker build -t convert:si .
docker run --rm -it -p 3000:3000 convert:si 
```

### Direct

```
npm install
node src/index.js
```

## Usage

```bash
curl -X GET \
  'http://172.17.0.2:3000/units/si?units=%28degree/minute%29' 
```
```json
{
    "unit_name": "(rad/s)",
    "multiplication_factor": 0.00029088820867
}
```
