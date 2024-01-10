import radioStationsData from "@/data/radioStation.json";
import { IRadioStation } from "@/interfaces/IRadioStation";

export const Radiostations: IRadioStation[] = radioStationsData;

export const radioStreamUrl =
    "https://d111.rndfnk.com/ard/wdr/1live/diggi/mp3/128/stream.mp3?cid=01FBS02KK2TSYGZSY19X8ZJ3RK&sid=2YIiI9oCsRiYeENCb5z0pjJUBbT&token=sQZy-a7n_d2_aezAZi0F6ePNYitKEqUCo6L-ib1BanE&tvf=LynrKDF4mBdkMTExLnJuZGZuay5jb20";

// import { IRadioStation } from "@/interfaces/IRadioStation";

// export const radioStreamUrl =
//     "https://d111.rndfnk.com/ard/wdr/1live/diggi/mp3/128/stream.mp3?cid=01FBS02KK2TSYGZSY19X8ZJ3RK&sid=2YIiI9oCsRiYeENCb5z0pjJUBbT&token=sQZy-a7n_d2_aezAZi0F6ePNYitKEqUCo6L-ib1BanE&tvf=LynrKDF4mBdkMTExLnJuZGZuay5jb20";

// export const Radiostations: IRadioStation[] = [
//     {
//         id: "radio1",
//         name: "1 Live",
//         streamUrl:
//             "https://d111.rndfnk.com/ard/wdr/1live/live/mp3/128/stream.mp3?cid=01FBRZTS1K1TCD4KA2YZ1ND8X3&sid=2ZTweB44h0LLrG0UHCTQmEHS9ep&token=wx0-d1nCps5NkG1_WJs-5ZN5P7pBLEdy76FaIPeynig&tvf=5qtNTINtoBdkMTExLnJuZGZuay5jb20",
//         group: "1 Live",
//     },
//     {
//         id: "radio2",
//         name: "1 Live Diggi",
//         streamUrl:
//             "https://d121.rndfnk.com/ard/wdr/1live/diggi/mp3/128/stream.mp3?cid=01FBS02KK2TSYGZSY19X8ZJ3RK&sid=2ZTwaBkwRkhWBzdEQfLj1VtQ3UP&token=w5XP7b1ywEZx4R_OQkpi0WNF7HY8td_UPgQKZbnDeSI&tvf=zeqo2XttoBdkMTIxLnJuZGZuay5jb20",
//         group: "1 Live",
//     },
//     {
//         id: "radio3",
//         name: "1 Live Chillout",
//         streamUrl:
//             "https://d141.rndfnk.com/ard/wdr/1live/chillout/mp3/128/stream.mp3?cid=01GRBW9YMFF3AKBC3JQ513E69J&sid=2ZTweUNNffYI8Yupbwfh30riTlc&token=bM20Kp05BU6MQIuIaud7ZOs18Cs31f6nPlF_w2qOxXA&tvf=nXcj-4NtoBdkMTQxLnJuZGZuay5jb20",
//         group: "1 Live",
//     },
//     {
//         id: "radio4",
//         name: "ILoveRadio",
//         streamUrl: "http://stream01.iloveradio.de/iloveradio1.mp3",
//         group: "ILoveRadio",
//     },
//     {
//         id: "radio5",
//         name: "ILoveRadio Dance",
//         streamUrl: "http://stream01.iloveradio.de/iloveradio2.mp3",
//         group: "ILoveRadio",
//     },
//     {
//         id: "radio6",
//         name: "ILoveRadio HipHop",
//         streamUrl: "http://stream01.iloveradio.de/iloveradio3.mp3",
//         group: "ILoveRadio",
//     },
//     {
//         id: "radio7",
//         name: "ILoveRadio Top 100 Charts",
//         streamUrl: "http://stream01.iloveradio.de/iloveradio9.mp3",
//         group: "ILoveRadio",
//     },
//     {
//         id: "radio8",
//         name: "ILoveRadio Mashup",
//         streamUrl: "http://stream01.iloveradio.de/iloveradio5.mp3",
//         group: "ILoveRadio",
//     },
//     {
//         id: "radio9",
//         name: "ILoveRadio Chill",
//         streamUrl: "http://stream01.iloveradio.de/iloveradio10.mp3",
//         group: "ILoveRadio",
//     },
//     {
//         id: "radio10",
//         name: "ILoveRadio History",
//         streamUrl: "http://stream01.iloveradio.de/iloveradio12.mp3",
//         group: "ILoveRadio",
//     },
//     {
//         id: "radio11",
//         name: "ILoveRadio The Beach",
//         streamUrl: "http://stream01.iloveradio.de/iloveradio7.mp3",
//         group: "ILoveRadio",
//     },
//     {
//         id: "radio12",
//         name: "ILoveRadio Party",
//         streamUrl: "http://stream01.iloveradio.de/iloveradio14.mp3",
//         group: "ILoveRadio",
//     },
//     {
//         id: "radio13",
//         name: "ILoveRadio Rock",
//         streamUrl: "http://stream01.iloveradio.de/iloveradio4.mp3",
//         group: "ILoveRadio",
//     },
//     {
//         id: "radio14",
//         name: "ILoveRadio Chillhop",
//         streamUrl: "http://stream01.iloveradio.de/iloveradio17.mp3",
//         group: "ILoveRadio",
//     },
//     {
//         id: "radio15",
//         name: "ILoveRadio Bass by HBz",
//         streamUrl: "https://streams.ilovemusic.de/iloveradio29.mp3",
//         group: "ILoveRadio",
//     },
//     {
//         id: "radio16",
//         name: "Radio Paloma",
//         streamUrl: "http://icepool.silvacast.com/RADIOPALOMA.mp3",
//         group: "Others",
//     },
//     {
//         id: "radio17",
//         name: "Radio Bob",
//         streamUrl: "http://streams.radiobob.de/bob-live/mp3-192/mediaplayer",
//         group: "Radio Bob",
//     },
//     {
//         id: "radio18",
//         name: "Radio Bob Classic",
//         streamUrl:
//             "http://streams.radiobob.de/bob-classicrock/mp3-128/mediaplayer",
//         group: "Radio Bob",
//     },
//     {
//         id: "radio19",
//         name: "Radio Bob Deutschrock",
//         streamUrl: "http://streams.radiobob.de/bob-deutsch/mp3-192/mediaplayer",
//         group: "Radio Bob",
//     },
//     {
//         id: "radio20",
//         name: "Rock Antenne Deutschrock",
//         streamUrl: "http://mp3channels.webradio.rockantenne.de/deutschrock",
//         group: "Radio Antenne",
//     },
//     {
//         id: "radio21",
//         name: "Rock Antenne Classic",
//         streamUrl: "http://mp3channels.webradio.rockantenne.de/classic-perlen",
//         group: "Radio Antenne",
//     },
//     {
//         id: "radio22",
//         name: "Radio Bollerwagen",
//         streamUrl: "http://player.ffn.de/radiobollerwagen.mp3",
//         group: "Others",
//     },
//     {
//         id: "radio23",
//         name: "SWR 3",
//         streamUrl: "https://liveradio.swr.de/sw331ch/swr3/",
//         group: "Others",
//     },
//     {
//         id: "radio24",
//         name: "BigFM",
//         streamUrl: "http://streams.bigfm.de/bigfm-hotmusicradio-128-mp3",
//         group: "Others",
//     },
//     {
//         id: "radio25",
//         name: "WDR 2",
//         streamUrl:
//             "https://wdr-wdr2-ostwestfalenlippe.icecastssl.wdr.de/wdr/wdr2/ostwestfalenlippe/mp3/128/stream.mp3",
//         group: "Others",
//     },
// ];
