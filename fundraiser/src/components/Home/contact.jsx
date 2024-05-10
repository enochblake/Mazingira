import { FormControl, FormLabel,Heading,Input,Text,Button } from '@chakra-ui/react';
import React from 'react';

const Contact = () => {
    return (
    <div className="contact-container">
    <div> 
    <Heading>Our Contacts</Heading>
        <Text>Get in touch Via</Text>
    <div className='contact--icons1'>
    <Heading><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGUlEQVR4nO2aS0hVURSG/8pepDWM7AFFBZk1CdTuXeucHko2qAbRpGkkiaLUJCcNgmjeoIggEGleNGkShRSRSJNUGkVBZVH0VkrF/tjn3m5iaXuf1z1CCxZcLpd//9866yz22ecC/6MQVKyloIWKHgoeUfCOggkqxql4S0U/Bd1UHGMO1chKUNBMxV0qJqmgZZrf3qagsbzGBX0Opv+eggepgrARKyi4Ftn4nyDdzKEqWfMeNlHwJHbzWsoh+tiYlPltFLxJ0DyLV2KYHrbEaz6HagpeJG5eS/mKPtbEY34HFgYjMD3zLOZD+qiIDqA4WwbzLOaZaObzWEfBN8cefkwPncxjK5uwLEjz2XwnGHAEGGUDVkep/kUH498paCUwf0a9I1hARRsVYw4QF8KZz6GKii/W5j3sdijMHmsIwSdzFd0BFIcdqnQihH67g/4hdwDBZeuen6Vt/tFOg5YAl8IA2O1zBB3O4r/XOGkJcN9dvLAFtgGoCQ3go9Zyjdfu4ubGtBH3URkaIBcMCqsh4S5uZrCNeIQdJOuw3BLgq7u44FlmWkjxNAxAr5W4h87Eb2LBnTDi5y3FB8xIDDlGhyyvwDl3gDz2W4qbbHPWF3Q46O9zB2jGYio+WC4wRsFeB/ONxdMKWuR71mCRM0CwkOKKQ5XM3qZ9tnYK2qZQeVvzNDuCUOaLlap3APiVg8HNaSaMj8pi1lJwyqHnOSXrQgMEEIp7IRaNJwW9kcwHAB4Olg0gjwORAQIIc/iUfvX7CMyLB0DhpQ7g2T8g2UEIbqQIcD1W81Me8EdSMD9KxfrYAQIIRVcKvX86EfMBgI+KhG/ofnOQlhhAACHYYH1a4Vb5EQo2J2p+CkRLAgDHUzFfglDcjBHgVmwz3xqgHiuDo/DolR82WqmaL0F42Ol4TDg9x+lBy2K+BFE46wxb/VZkIai4GgKgB1kJNmCp40uQfvpYgiwFFauoeG5h/mVsr4/iDnNGRMHHWcx/pmA7shzMY9cMk8lMnCbMhaCHo9P+ejBpvsNcCprXTQXzP8K8AEEWorj97kpykZ+xubp/rAMA/QAAAABJRU5ErkJggg==" alt='Location'/>
    </Heading>
        <Text>Nairobi</Text>
    </div>
    <div className='contact--icons1'> 

    <Heading><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEtklEQVR4nO2aX0xbVRjAPzXqg/qgL2ZRE+cS45hhGbdQ6L2tWe8F3EbPLTpcdC4h/JlAdVtpYZTNjtK96fZm1EfdG77JXpzT7EGXGY2Jmth2I+v+GF0qDTMbI7Tn9DP3cimF3pZOGW3v7i/5Qgj33/frd75zz6EAJiYmJiYmJiYmJiYmJiZ3Bfb7a9mBo19S39g09YcybGD0BhPIJ/hK+7NgdNATaGZD4dnMcBizcSiITJCR8iSB9rY6MCrYf+Q56gvdXJb8cBhZ32FVgCpBIEnDSmCHgpMrk1cFvNadFaBVwgw2tdWDkcC+wW1sOJzJS37/EDK7e5mAbCU4yDYwCugJfJT36XuPIdu+Oy/5HAnTaHdtBCPABsd+UZM+8THi+R8x8/kXyHb3FEw+R8JPWNPxCFQ7zD+uNj+MX0MVxpC5u1YVoPWELqh22FA4pQr4O7kgQHGw552SBDCBfAXVDvOH51QBieklAW97SqwA+TJUO8w3fl0VEJ3KCsiETpYq4AJUO+gNfqMKOHd+ScDps/dPD8ADo2F1Fvj0VFYAztxE5nAXmQHkDBPkMBgBHDi6RX0RGjmOeOt2zjA4UWj6Y1QgHWAkmPYugN9+t1QF8Wv6FcCTU2A06LuBXnUYjJ9ETKWWZoO3+vUanw+MBnZMPMR8oauqhMkziJQh/hrBzMH3kTnaVza+cwjwABgNOjDaqbsi3KvzTsDLY2BE0Bv8XlcC6cybBagg7wOjgX2Bl9nQ+J08CYNjyKQ3Vs4GqTQvu8BoUM8Rv24VeAJ5+wNUIPNp3r0DjAbzBr/WlfB6/jKZ8vLttECkUq6L3P6HsantJbS6noZKBru9T1FfKJ4noNdfaE0wt9pwoDw5qOwmLZtNBPeLUKnge4Gaxb2CrICBkWIbJClqlzv1rsV4OVTgnMreaEXPSBvzh+ezAroHV18k8fLx3PcEKrjf1NYOusenBZK8bm22QqVC+0b2seFwWhUgd5a6TP6ZCeRDxsuniyWvRKJxB0Y5cSbeIDVCpUK9wV7a42Ol7RKVHlSQMWaRMMKJGKkT/7nCNfNQqVB7e4+yElxLAbM210LyWlR+JQjKeCapeyVgoRKcybi19XmoVNK87FKmvbUQkBYIRjltCORWgkX6DCoZtMl25R+mayHhT+urOlUg/gWVDtpdG6lAfivW4OZ5ov4sJkA5RkcAhWoAbeQJJsgTuQmleKJ+qtnuzol4pb4Fpxt34h2bKytESTzZuBMv5RyXEwmoJihPuihPbilJTVma9RK6q4hx4gRUG2hzb/qjofXM/00+wjlnLzY4a6BaiVrEPVFOvPifkq9zJqcatjuh2kE49mCkTtx7ySJdiHBSZrXEf+fETJQTJ2Jbnc+A0bhh2fXCZU46HOOkyZhFmopx0lyME+ejnJSIWsQfpurFD67Wt24p93OamJiYmJgs51EAeBIANgCA8pW4zQCgfD/QBgB2AHAAgPLSIgJAqxZtWiz+LmrHOLRzbNo1NmvX3KDdQ7lX2XkcADYBgLJB2ZKTzHpFi3Zv5RkeW+/ktwLArjIkXSiUZ6ldTwG197sA0MqunEOguZxDAHQo1ASbVjRBJQo1wcW/LzZB5dx72gT/BZLOqp/c6UAsAAAAAElFTkSuQmCC" alt='Phone'/></Heading>
        <Text>12345678</Text>
        </div>
        <div className='contact--icons1'> 
    <Heading><img src="data:image/png;base64,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"alt='email'/></Heading>
        <Text>sample@gmail.com</Text>
        </div>
        </div>
    <div className='quick--form'> 
    

    <Heading>Quick Contact Form</Heading>
        <FormControl>
        <div>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input type="text" id="name" name="name" />
        </div>
        <div>
            <FormLabel htmlFor="lastname">Lastname</FormLabel>
            <Input type="text" id="lastname" name="lastname" />
        </div>
        <div>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="email" id="email" name="email" />
        </div>
        <div>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <Input type="text" id="subject" name="subject" />
        </div>
        <Button type="submit">Submit</Button>
        </FormControl>
        </div>
    </div>
);
};

export default Contact;
