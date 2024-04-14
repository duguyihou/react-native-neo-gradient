import SwiftUI

extension Color {
  static func convert(fromUIColor color: UIColor) -> Color {
    return Color(red: Double(color.cgColor.components![0]),
                 green: Double(color.cgColor.components![1]),
                 blue: Double(color.cgColor.components![2]))
  }
}
