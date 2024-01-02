(function() {var type_impls = {
"bevy":[["<section id=\"impl-Eq-for-BuildHasherDefault%3CH%3E\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.29.0\">1.29.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#801\">source</a></span><a href=\"#impl-Eq-for-BuildHasherDefault%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h3></section>","Eq","bevy::utils::hashbrown::hash_map::DefaultHashBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-BuildHasherDefault%3CH%3E\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.29.0\">1.29.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#794\">source</a></span><a href=\"#impl-PartialEq-for-BuildHasherDefault%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#795\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, _other: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","bevy::utils::hashbrown::hash_map::DefaultHashBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-BuildHasherDefault%3CH%3E\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.7.0\">1.7.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#780\">source</a></span><a href=\"#impl-Clone-for-BuildHasherDefault%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#781\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","bevy::utils::hashbrown::hash_map::DefaultHashBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BuildHasher-for-BuildHasherDefault%3CH%3E\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.7.0\">1.7.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#771\">source</a></span><a href=\"#impl-BuildHasher-for-BuildHasherDefault%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Hasher\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Hasher\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.BuildHasher.html#associatedtype.Hasher\" class=\"associatedtype\">Hasher</a> = H</h4></section></summary><div class='docblock'>Type of the hasher that will be created.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.build_hasher\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#774\">source</a><a href=\"#method.build_hasher\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.BuildHasher.html#tymethod.build_hasher\" class=\"fn\">build_hasher</a>(&amp;self) -&gt; H</h4></section></summary><div class='docblock'>Creates a new hasher. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.BuildHasher.html#tymethod.build_hasher\">Read more</a></div></details></div></details>","BuildHasher","bevy::utils::hashbrown::hash_map::DefaultHashBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-BuildHasherDefault%3CH%3E\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.9.0\">1.9.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#764\">source</a></span><a href=\"#impl-Debug-for-BuildHasherDefault%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#765\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","bevy::utils::hashbrown::hash_map::DefaultHashBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-BuildHasherDefault%3CH%3E\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.7.0\">1.7.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#787\">source</a></span><a href=\"#impl-Default-for-BuildHasherDefault%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#788\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","bevy::utils::hashbrown::hash_map::DefaultHashBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypePath-for-BuildHasherDefault%3CAHasher%3E\" class=\"impl\"><a href=\"#impl-TypePath-for-BuildHasherDefault%3CAHasher%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"bevy/reflect/trait.TypePath.html\" title=\"trait bevy::reflect::TypePath\">TypePath</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;<a class=\"struct\" href=\"bevy/utils/struct.AHasher.html\" title=\"struct bevy::utils::AHasher\">AHasher</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_path\" class=\"method trait-impl\"><a href=\"#method.type_path\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/reflect/trait.TypePath.html#tymethod.type_path\" class=\"fn\">type_path</a>() -&gt; &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a></h4></section></summary><div class='docblock'>Returns the fully qualified path of the underlying type. <a href=\"bevy/reflect/trait.TypePath.html#tymethod.type_path\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.short_type_path\" class=\"method trait-impl\"><a href=\"#method.short_type_path\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/reflect/trait.TypePath.html#tymethod.short_type_path\" class=\"fn\">short_type_path</a>() -&gt; &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a></h4></section></summary><div class='docblock'>Returns a short, pretty-print enabled path to the type. <a href=\"bevy/reflect/trait.TypePath.html#tymethod.short_type_path\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_ident\" class=\"method trait-impl\"><a href=\"#method.type_ident\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/reflect/trait.TypePath.html#method.type_ident\" class=\"fn\">type_ident</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>Returns the name of the type, or <a href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html#variant.None\" title=\"variant core::option::Option::None\"><code>None</code></a> if it is <a href=\"bevy/reflect/trait.TypePath.html#anonymity\" title=\"trait bevy::reflect::TypePath\">anonymous</a>. <a href=\"bevy/reflect/trait.TypePath.html#method.type_ident\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.crate_name\" class=\"method trait-impl\"><a href=\"#method.crate_name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/reflect/trait.TypePath.html#method.crate_name\" class=\"fn\">crate_name</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>Returns the name of the crate the type is in, or <a href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html#variant.None\" title=\"variant core::option::Option::None\"><code>None</code></a> if it is <a href=\"bevy/reflect/trait.TypePath.html#anonymity\" title=\"trait bevy::reflect::TypePath\">anonymous</a>. <a href=\"bevy/reflect/trait.TypePath.html#method.crate_name\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.module_path\" class=\"method trait-impl\"><a href=\"#method.module_path\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/reflect/trait.TypePath.html#method.module_path\" class=\"fn\">module_path</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>Returns the path to the module the type is in, or <a href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html#variant.None\" title=\"variant core::option::Option::None\"><code>None</code></a> if it is <a href=\"bevy/reflect/trait.TypePath.html#anonymity\" title=\"trait bevy::reflect::TypePath\">anonymous</a>. <a href=\"bevy/reflect/trait.TypePath.html#method.module_path\">Read more</a></div></details></div></details>","TypePath","bevy::utils::hashbrown::hash_map::DefaultHashBuilder"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()