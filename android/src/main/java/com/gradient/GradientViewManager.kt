package com.gradient

import android.content.Context
import android.view.View
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.platform.ViewCompositionStrategy
import com.facebook.react.bridge.ColorPropConverter
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class GradientViewManager : SimpleViewManager<View>() {
  override fun getName() = "GradientView"

  private var colors: List<Color>? = null

  override fun createViewInstance(reactContext: ThemedReactContext): View {
    return createComposeView(reactContext)
  }

  private fun createComposeView(context: Context): View {
    return ComposeView(context).apply {
      setViewCompositionStrategy(ViewCompositionStrategy.DisposeOnViewTreeLifecycleDestroyed)
      setContent {
        colors?.let {
          val brush = Brush.verticalGradient(it)
          Box(modifier = Modifier.background(brush))
        }
      }
    }
  }

  @ReactProp(name = "colors")
  fun setColors(view: View, colors: ReadableArray) {
    this.colors = colors.toArrayList().map {
      val colorValue = ColorPropConverter.getColor(it, view.context)
      Color(colorValue)
    }
  }
}
