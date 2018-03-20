const {Layer, Network} = require('synaptic');
const mnist = require('mnist');
const fs = require('fs');
const PNG = require('pngjs').PNG;

let getPixelsArray = (path) => {
    let buffer = PNG.sync.read(fs.readFileSync(path)).data;
    let img = [];
    for (let i = 0; i < buffer.length; i++) {
        img.push(buffer[i]);
    }
    return img;
};
let trainNetwork = (times, network, inputs, outputs) => {
    for (let i = 0; i < times; i++) {
        for (let j = 0; j < inputs.length; j++) {
            network.activate(inputs[j]);
            network.propagate(learningRate, outputs[j]);
        }
    }
};


var set = mnist.set(8000, 2000);

var trainingSet = set.training;
var testSet = set.test;

console.log(trainingSet[0].input.length);

// let img=getPixelsArray('imgs/letters/1_a_01.png');
//
// console.log(img[0]);
// console.log(img[1]);
// console.log(img[2]);
// console.log(img[3]);
//
// var r = 250 & 0xFF;
// var g = 140 & 0xFF;
// var b = 85 & 0xFF;
// var a = img[3] & 0xFF;
//
// var pixelValue = (r << 8) + (g << 8) + (b << 8) + (a);
//
// pixelData = {
//     red: pixelValue >> 8 & 0xFF,
//     green: pixelValue >> 8 & 0xFF,
//     blue: pixelValue >> 8 & 0xFF,
//     alpha: pixelValue & 0xFF
// };
//
// console.log(pixelData);
//
// let trainingSet1 = [];
// trainingSet1.push(getPixelsArray('imgs/letters/1_a_01.png'));
// trainingSet1.push(getPixelsArray('imgs/letters/2_b_01.png'));
// // trainingSet1.push(getPixelsArray('imgs/letters/3_c_01.png'));
// // trainingSet1.push(getPixelsArray('imgs/letters/4_d_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/5_e_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/6_f_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/7_g_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/8_h_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/9_i_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/10_k_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/11_l_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/12_m_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/13_o_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/14_p_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/15_r_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/16_s_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/17_t_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/18_u_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/19_w_01.png'));
// // // trainingSet1.push(getPixelsArray('imgs/letters/20_z_01.png'));
// //
// // let trainingSet2=[];
// // trainingSet2.push(getPixelsArray('imgs/letters/1_a_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/2_b_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/3_c_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/4_d_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/5_e_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/6_f_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/7_g_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/8_h_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/9_i_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/10_k_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/11_l_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/12_m_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/13_o_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/14_p_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/15_r_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/16_s_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/17_t_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/18_u_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/19_w_02.png'));
// // trainingSet2.push(getPixelsArray('imgs/letters/20_z_02.png'));
// //
// // let trainingSet3=[];
// // trainingSet3.push(getPixelsArray('imgs/letters/1_a_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/2_b_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/3_c_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/4_d_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/5_e_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/6_f_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/7_g_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/8_h_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/9_i_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/10_k_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/11_l_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/12_m_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/13_o_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/14_p_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/15_r_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/16_s_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/17_t_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/18_u_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/19_w_03.png'));
// // trainingSet3.push(getPixelsArray('imgs/letters/20_z_03.png'));
// //
// let outputs = [
//
//     [1, 0, 0, 0],//A1
//     [0, 1, 0, 0],//B2
// //     [0, 0, 1, 0],//C3
// //     [0, 0, 0, 1],//D4
// //     // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//A1
// //     // [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//B2
// //     // [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//C3
// //     // [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//D4
// //     // [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//E5
// //     // [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//F6
// //     // [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//G7
// //     // [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//H8
// //     // [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//I9
// //     // [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//K10
// //     // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],//L11
// //     // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],//M12
// //     // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],//O13
// //     // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],//P14
// //     // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],//R15
// //     // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],//S16
// //     // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],//T17
// //     // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],//U18
// //     // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],//W19
// //     // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],//Z20
// ];
//
//
// let inputLayer = new Layer(1600);//20 letters inputs
// let hiddenLayer = new Layer(16);//hidden neurons
// let hiddenLayer2 = new Layer(16);//hidden neurons
// let outputLayer = new Layer(2);//output neurons
//
// inputLayer.project(hiddenLayer);
// hiddenLayer.project(outputLayer);
//
// let myNetwork = new Network({
//     input: inputLayer,
//     hidden: [hiddenLayer, hiddenLayer2],
//     output: outputLayer
// });
//
// let learningRate = 0.8;
//
// trainNetwork(5000, myNetwork, trainingSet1, outputs);
// // trainNetwork(2000,myNetwork,trainingSet2,outputs);
// // // trainNetwork(2000,myNetwork,trainingSet3,outputs);
// //
// console.log(myNetwork.activate(getPixelsArray('imgs/letters/1_a_01.png')));
// console.log(myNetwork.activate(getPixelsArray('imgs/letters/2_b_01.png')));
// // console.log(myNetwork.activate(getPixelsArray('imgs/letters/3_c_01.png')));
// // console.log(myNetwork.activate(getPixelsArray('imgs/letters/4_d_01.png')));
