(function() {var type_impls = {
"bevy":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TextureDescriptor%3CL,+V%3E\" class=\"impl\"><a href=\"#impl-TextureDescriptor%3CL,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L, V&gt; TextureDescriptor&lt;L, V&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_label\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">map_label</a>&lt;K&gt;(&amp;self, fun: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;L</a>) -&gt; K) -&gt; TextureDescriptor&lt;K, V&gt;<span class=\"where fmt-newline\">where\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h4></section></summary><div class=\"docblock\"><p>Takes a closure and maps the label of the texture descriptor into another.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_label_and_view_formats\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">map_label_and_view_formats</a>&lt;K, M&gt;(\n    &amp;self,\n    l_fun: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;L</a>) -&gt; K,\n    v_fun: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(V) -&gt; M\n) -&gt; TextureDescriptor&lt;K, M&gt;<span class=\"where fmt-newline\">where\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h4></section></summary><div class=\"docblock\"><p>Maps the label and view_formats of the texture descriptor into another.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mip_level_size\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">mip_level_size</a>(&amp;self, level: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"bevy/render/render_resource/struct.Extent3d.html\" title=\"struct bevy::render::render_resource::Extent3d\">Extent3d</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Calculates the extent at a given mip level.</p>\n<p>If the given mip level is larger than possible, returns None.</p>\n<p>Treats the depth as part of the mipmaps. If calculating\nfor a 2DArray texture, which does not mipmap depth, set depth to 1.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>desc  = TextureDescriptor {\n  label: (),\n  size: wgpu::Extent3d { width: <span class=\"number\">100</span>, height: <span class=\"number\">60</span>, depth_or_array_layers: <span class=\"number\">1 </span>},\n  mip_level_count: <span class=\"number\">7</span>,\n  sample_count: <span class=\"number\">1</span>,\n  dimension: wgpu::TextureDimension::D3,\n  format: wgpu::TextureFormat::Rgba8Sint,\n  usage: wgpu::TextureUsages::empty(),\n  view_formats: <span class=\"kw-2\">&amp;</span>[],\n};\n\n<span class=\"macro\">assert_eq!</span>(desc.mip_level_size(<span class=\"number\">0</span>), <span class=\"prelude-val\">Some</span>(wgpu::Extent3d { width: <span class=\"number\">100</span>, height: <span class=\"number\">60</span>, depth_or_array_layers: <span class=\"number\">1 </span>}));\n<span class=\"macro\">assert_eq!</span>(desc.mip_level_size(<span class=\"number\">1</span>), <span class=\"prelude-val\">Some</span>(wgpu::Extent3d { width: <span class=\"number\">50</span>, height: <span class=\"number\">30</span>, depth_or_array_layers: <span class=\"number\">1 </span>}));\n<span class=\"macro\">assert_eq!</span>(desc.mip_level_size(<span class=\"number\">2</span>), <span class=\"prelude-val\">Some</span>(wgpu::Extent3d { width: <span class=\"number\">25</span>, height: <span class=\"number\">15</span>, depth_or_array_layers: <span class=\"number\">1 </span>}));\n<span class=\"macro\">assert_eq!</span>(desc.mip_level_size(<span class=\"number\">3</span>), <span class=\"prelude-val\">Some</span>(wgpu::Extent3d { width: <span class=\"number\">12</span>, height: <span class=\"number\">7</span>, depth_or_array_layers: <span class=\"number\">1 </span>}));\n<span class=\"macro\">assert_eq!</span>(desc.mip_level_size(<span class=\"number\">4</span>), <span class=\"prelude-val\">Some</span>(wgpu::Extent3d { width: <span class=\"number\">6</span>, height: <span class=\"number\">3</span>, depth_or_array_layers: <span class=\"number\">1 </span>}));\n<span class=\"macro\">assert_eq!</span>(desc.mip_level_size(<span class=\"number\">5</span>), <span class=\"prelude-val\">Some</span>(wgpu::Extent3d { width: <span class=\"number\">3</span>, height: <span class=\"number\">1</span>, depth_or_array_layers: <span class=\"number\">1 </span>}));\n<span class=\"macro\">assert_eq!</span>(desc.mip_level_size(<span class=\"number\">6</span>), <span class=\"prelude-val\">Some</span>(wgpu::Extent3d { width: <span class=\"number\">1</span>, height: <span class=\"number\">1</span>, depth_or_array_layers: <span class=\"number\">1 </span>}));\n<span class=\"macro\">assert_eq!</span>(desc.mip_level_size(<span class=\"number\">7</span>), <span class=\"prelude-val\">None</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.compute_render_extent\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">compute_render_extent</a>(&amp;self, mip_level: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>) -&gt; <a class=\"struct\" href=\"bevy/render/render_resource/struct.Extent3d.html\" title=\"struct bevy::render::render_resource::Extent3d\">Extent3d</a></h4></section></summary><div class=\"docblock\"><p>Computes the render extent of this texture.</p>\n<p><a href=\"https://gpuweb.github.io/gpuweb/#abstract-opdef-compute-render-extent\">https://gpuweb.github.io/gpuweb/#abstract-opdef-compute-render-extent</a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.array_layer_count\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">array_layer_count</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a></h4></section></summary><div class=\"docblock\"><p>Returns the number of array layers.</p>\n<p><a href=\"https://gpuweb.github.io/gpuweb/#abstract-opdef-array-layer-count\">https://gpuweb.github.io/gpuweb/#abstract-opdef-array-layer-count</a></p>\n</div></details></div></details>",0,"bevy::render::render_resource::TextureDescriptor"],["<section id=\"impl-StructuralEq-for-TextureDescriptor%3CL,+V%3E\" class=\"impl\"><a href=\"#impl-StructuralEq-for-TextureDescriptor%3CL,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for TextureDescriptor&lt;L, V&gt;</h3></section>","StructuralEq","bevy::render::render_resource::TextureDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-TextureDescriptor%3CL,+V%3E\" class=\"impl\"><a href=\"#impl-Clone-for-TextureDescriptor%3CL,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for TextureDescriptor&lt;L, V&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; TextureDescriptor&lt;L, V&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","bevy::render::render_resource::TextureDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-TextureDescriptor%3CL,+V%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-TextureDescriptor%3CL,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for TextureDescriptor&lt;L, V&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;TextureDescriptor&lt;L, V&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","bevy::render::render_resource::TextureDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-TextureDescriptor%3CL,+V%3E\" class=\"impl\"><a href=\"#impl-Hash-for-TextureDescriptor%3CL,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for TextureDescriptor&lt;L, V&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __H</a>)<span class=\"where fmt-newline\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</span></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#242-244\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut H</a>)<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","bevy::render::render_resource::TextureDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-TextureDescriptor%3CL,+V%3E\" class=\"impl\"><a href=\"#impl-Debug-for-TextureDescriptor%3CL,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for TextureDescriptor&lt;L, V&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","bevy::render::render_resource::TextureDescriptor"],["<section id=\"impl-Eq-for-TextureDescriptor%3CL,+V%3E\" class=\"impl\"><a href=\"#impl-Eq-for-TextureDescriptor%3CL,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for TextureDescriptor&lt;L, V&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</span></h3></section>","Eq","bevy::render::render_resource::TextureDescriptor"],["<section id=\"impl-StructuralPartialEq-for-TextureDescriptor%3CL,+V%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-TextureDescriptor%3CL,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for TextureDescriptor&lt;L, V&gt;</h3></section>","StructuralPartialEq","bevy::render::render_resource::TextureDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-TextureDescriptor%3CL,+V%3E\" class=\"impl\"><a href=\"#impl-Serialize-for-TextureDescriptor%3CL,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L, V&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for TextureDescriptor&lt;L, V&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,\n    V: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","bevy::render::render_resource::TextureDescriptor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()