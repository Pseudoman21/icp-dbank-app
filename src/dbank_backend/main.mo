import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float"
actor {
  stable var currentValue: Float = 300;
  // currentValue := 200;

  stable var startTime = Time.now();
  
  public func topUp (amount: Float) : async Float { // variable amount, type Nat - natural number
    currentValue += amount;
    Debug.print(debug_show(currentValue));
    return currentValue;
  };

  public func withdraw (amount: Float) {
    let tempVal: Float = currentValue - amount;
    if(tempVal >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue))
    }
    else {
      Debug.print("Invalid input!")
    }
  };

  public query func checkBalance() : async Float {
    return currentValue;
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;

    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS/10));

    startTime := currentTime;
  }
};
