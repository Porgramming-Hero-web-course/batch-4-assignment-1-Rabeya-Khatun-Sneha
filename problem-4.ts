type Circle = {
    shape: "circle";
    radius: number;
  };
  
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  
  type Shape = Circle | Rectangle;
  
  function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle")
         {
     const area = Math.PI * Math.pow(shape.radius, 2);
    return parseFloat(area.toFixed(2));
    } 
    else (shape.shape === "rectangle") 
    {
      return shape.width * shape.height;
    }

  }
  
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea); 
  
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea); 
  
   