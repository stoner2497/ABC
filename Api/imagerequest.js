async function quickstart(image) {
    
    // Performs label detection on the image file
    const [result] = await client.labelDetection(image);
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  }
module.exports = quickstart