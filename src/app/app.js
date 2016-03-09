$(function() {

	//jsCow.debug.events = true;

	console.time('all');

	NodeEditorOptions1 = {
		grid: 30,
		nodes: [
			{
				id: 'node1',
				title: 'Node 1',
				pos: {
					left: 30,
					top: 30
				},
				inputs: [
					{
						"type": false,
						"id": "in1",
						"title": "Input Port 1",
						"value": 1
					},
					{
						"type": false,
						"id": "in2",
						"title": "Input Port 2",
						"value": 1
					}
				],
				outputs: [
					{
						"type": false,
						"id": "out1",
						"title": "Output Port 1",
						"value": 1
					},
					{
						"type": false,
						"id": "out2",
						"title": "Output Port 2",
						"value": 1
					},
					{
						"type": false,
						"id": "out3",
						"title": "Output Port 3",
						"value": 1
					},
					{
						"type": false,
						"id": "out4",
						"title": "Output Port 4",
						"value": 1
					},
					{
						"type": false,
						"id": "out5",
						"title": "Output Port 5",
						"value": 1
					}
				]
			},
			{
				id: 'node2',
				title: 'Node 2',
				pos: {
					left: 580,
					top: 200
				},
				inputs: [
					{
						"type": false,
						"id": "in1",
						"title": "Input Port 1",
						"value": 1
					},
					{
						"type": false,
						"id": "in2",
						"title": "Input Port 2",
						"value": 1
					},
					{
						"type": false,
						"id": "in3",
						"title": "Input Port 3",
						"value": 1
					}
				],
				outputs: [
					{
						"type": false,
						"id": "out1",
						"title": "Output Port 1",
						"value": 1
					},
					{
						"type": false,
						"id": "out2",
						"title": "Output Port 2",
						"value": 1
					}
				]
			},
			{
				id: 'node3',
				title: 'Node 3',
				pos: {
					left: 1000,
					top: 150
				},
				inputs: [
					{
						"type": false,
						"id": "in1",
						"title": "Input Port 1",
						"value": 1
					}
				],
				outputs: [
					{
						"type": false,
						"id": "out1",
						"title": "Output Port 1",
						"value": 1
					}
				]
			}
		],
		connections: [
			{
				from: {
					node: 'node1',
					out: 'out1'
				},
				to: {
					node: 'node2',
					in: 'in1'
				}
			},
			{
				color: '#f00',
				from: {
					node: 'node1',
					out: 'out1'
				},
				to: {
					node: 'node2',
					in: 'in2'
				}
			},
			{
				from: {
					node: 'node1',
					out: 'out4'
				},
				to: {
					node: 'node2',
					in: 'in3'
				}
			},
			{
				color: '#fc0',
				from: {
					node: 'node2',
					out: 'out2'
				},
				to: {
					node: 'node3',
					in: 'in1'
				}
			},
			{
				from: {
					node: 'node1',
					out: 'out2'
				},
				to: {
					node: 'node3',
					in: 'in1'
				}
			}
		]
	};
	
	NodeEditorOptions2 = {
		grid: 20,
		nodes: [
			{
				id: 'node1',
				title: 'Node 1',
				pos: {
					left: 20,
					top: 20
				},
				inputs: [
					{
						"type": false,
						"id": "in1",
						"title": "Input Port 1",
						"value": 1
					},
					{
						"type": false,
						"id": "in2",
						"title": "Input Port 2",
						"value": 1
					}
				],
				outputs: [
					{
						"type": false,
						"id": "out1",
						"title": "Output Port 1",
						"value": 1
					},
					{
						"type": false,
						"id": "out2",
						"title": "Output Port 2",
						"value": 1
					}
				]
			},
			{
				id: 'node2',
				title: 'Node 2',
				pos: {
					left: 280,
					top: 50
				},
				inputs: [
					{
						"type": false,
						"id": "in1",
						"title": "Input Port 1",
						"value": 1
					},
					{
						"type": false,
						"id": "in2",
						"title": "Input Port 2",
						"value": 1
					}
				],
				outputs: [
					{
						"type": false,
						"id": "out1",
						"title": "Output Port 1",
						"value": 1
					},
					{
						"type": false,
						"id": "out2",
						"title": "Output Port 2",
						"value": 1
					}
				]
			},
			{
				id: 'node3',
				title: 'Node 3',
				pos: {
					left: 150,
					top: 200
				},
				inputs: [
					{
						"type": false,
						"id": "in1",
						"title": "Input Port 1",
						"value": 1
					},
					{
						"type": false,
						"id": "in2",
						"title": "Input Port 2",
						"value": 1
					}
				],
				outputs: [
					{
						"type": false,
						"id": "out1",
						"title": "Output Port 1",
						"value": 1
					},
					{
						"type": false,
						"id": "out2",
						"title": "Input Port 2",
						"value": 1
					}
				]
			}
		],
		connections: [
			{
				from: {
					node: 'node1',
					out: 'out1'
				},
				to: {
					node: 'node2',
					in: 'in1'
				}
			},
			{
				from: {
					node: 'node1',
					out: 'out1'
				},
				to: {
					node: 'node2',
					in: 'in2'
				}
			}
		]
	};
	



	nodeeditor1 = jsCow.get(jsCow.res.components.nodeeditor, {
		id: 'node-editor-1',
		model: {
			repositories: [
				{
					group: 'muh',
					title: 'Kuh Nodes',
					description: 'General repository of node types.',
					types: [
						{
							title: 'Node 1/1',
							inputs: [
								{
									"type": false,
									"id": "in1",
									"title": "Input Port 1",
									"value": 1
								}
							],
							outputs: [
								{
									"type": false,
									"id": "out1",
									"title": "Output Port 1",
									"value": 1
								}
							]
						},
						{
							title: 'Muh Node',
							inputs: [],
							outputs: [
								{
									"type": false,
									"id": "out1",
									"title": "Output Port 1",
									"value": 1
								}
							]
						},
						{
							title: 'Test Node',
							inputs: [
								{
									"type": false,
									"id": "in1",
									"title": "Input Port 1",
									"value": 1
								}
							],
							outputs: []
						}
					]
				}
			]
		}
	})
	.on('editor.options.changed', function(e) {
		console.log("");
		console.log(e.sender.id()+" >>> changed >>>", e.data);
	}).target('#node-editor-1').run();

	nodeeditor2 = jsCow.get(jsCow.res.components.nodeeditor, {
		id: 'node-editor-2'
	})
	.on('editor.options.changed', function(e) {
		console.log("");
		console.log(e.sender.id()+" >>> changed >>>", e.data);
	}).target('#node-editor-2').run();



	
	/*
	$('body').append('<button id="setOptions">Set Options</button>');
	$('#setOptions').click(function() {
		jsCow.find('node-editor-1').options(NodeEditorOptions1);
	});
	*/

	$('body').append('<button id="addNodes">Add Nodes</button>');
	$('#addNodes').click(function() {
		jsCow.find('node-editor-1').addNode([
			{
				id: 'node100',
				title: 'Node 100',
				pos: {
					left: 30,
					top: 150
				},
				config: [
					{
						"type": "jsCow.res.components.nodetypeinput",
						"title": "Config Input 1",
						"value": 1
					},
					{
						"type": "jsCow.res.components.nodetypeinput",
						"id": "cfg2",
						"title": "Config Input 2",
						"value": 2
					}
				],
				inputs: [
					{
						"type": false,
						"id": "in1",
						"title": "Input Port 1",
						"value": 1
					},
					{
						"type": false,
						"id": "in2",
						"title": "Input Port 2",
						"value": 2
					},
					{
						"type": false,
						"id": "in3",
						"title": "Input Port 3",
						"value": 3
					}

				],
				outputs: [
					{
						"type": false,
						"id": "out1",
						"title": "Output Port 1",
						"value": 1
					},
					{
						"type": false,
						"id": "out2",
						"title": "Output Port 2",
						"value": 1
					},
					{
						"type": false,
						"id": "out3",
						"title": "Output Port 3",
						"value": 1
					}
				]
			},
			{
				id: 'node2',
				title: 'Node 2',
				pos: {
					left: 380,
					top: 180
				},
				config: [
					{
						"type": "jsCow.res.components.nodetypeinput",
						"title": "Config Input 1",
						"value": 1
					}
				],
				inputs: [
					{
						"type": false,
						"id": "in1",
						"title": "Input Port 1",
						"value": 1
					},
					{
						"type": "jsCow.res.components.nodetypeinput",
						"id": "in2",
						"title": "Input Port 2",
						"value": 2
					}
				],
				outputs: [
					{
						"type": "jsCow.res.components.nodetypeinput",
						"title": "Output Port 1",
						"value": 1,
						"placeholder": "321"
					},
					{
						"type": false,
						"id": "out2",
						"title": "Output Port 2",
						"value": 2
					}
				]
			}
		]);
	});
	
	$('body').append('<button id="addSingleNode">Add Single Node</button>');
	$('#addSingleNode').click(function() {
		jsCow.find('node-editor-1').addNode({
			id: 'node200',
			title: 'Node 200',
			pos: {
				left: 500,
				top: 400
			},
			inputs: [
				{
					"type": false,
					"id": "in1",
					"title": "Input Port 1",
					"value": 1
				},
				{
					"type": false,
					"id": "in2",
					"title": "Input Port 2",
					"value": 1
				}
			],
			outputs: [
				{
					"type": false,
					"id": "out1",
					"title": "Output Port 1",
					"value": 1
				},
				{
					"type": false,
					"id": "out2",
					"title": "Output Port 2",
					"value": 1
				}
			]
		});
	});
	
	$('body').append('<button id="addConnections">Set Connection</button>');
	$('#addConnections').click(function() {
		jsCow.find('node-editor-1').addConnection([
			{
				from: {
					node: 'node1',
					out: 'out1'
				},
				to: {
					node: 'node100',
					in: 'in1'
				}
			},
			{
				from: {
					node: 'node2',
					out: 'out1'
				},
				to: {
					node: 'node200',
					in: 'in2'
				}
			},
			{
				from: {
					node: 'node100',
					out: 'out1'
				},
				to: {
					node: 'node200',
					in: 'in1'
				}
			}
		]);
	});
	
	$('body').append('<button id="addRepository">Add Repository - general</button>');
	$('#addRepository').click(function() {
		jsCow.find('node-editor-1').addNodesRepository({
			group: 'general',
			title: 'General Nodes',
			description: 'General repository of node types.',
			types: [
				{
					title: 'Node 1/1',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: [
						{
							"type": false,
							"id": "out1",
							"title": "Output Port 1",
							"value": 1
						}
					]
				},
				{
					title: 'Muh Node',
					inputs: [],
					outputs: [
						{
							"type": false,
							"id": "out1",
							"title": "Output Port 1",
							"value": 1
						}
					]
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				}
			]
		});
	});
	
	$('body').append('<button id="addRepositoryRules">Add Repository - Rules</button>');
	$('#addRepositoryRules').click(function() {
		jsCow.find('node-editor-1').addNodesRepository({
			group: 'rules',
			title: 'Promotion Rules',
			description: 'Repository of node types for promotion rules',
			types: [
				{
					title: 'Node 1/1',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: [
						{
							"type": false,
							"id": "out1",
							"title": "Output Port 1",
							"value": 1
						}
					]
				},
				{
					title: 'Muh Node',
					inputs: [],
					outputs: [
						{
							"type": false,
							"id": "out1",
							"title": "Output Port 1",
							"value": 1
						}
					]
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				}
			]
		});
	});
	
	$('body').append('<button id="addRepositoryTest">Add Repository - Test</button>');
	$('#addRepositoryTest').click(function() {
		jsCow.find('node-editor-1').addNodesRepository({
			group: 'test',
			title: 'Test',
			description: 'Test Group',
			types: [
				{
					title: 'Node 1/1',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: [
						{
							"type": false,
							"id": "out1",
							"title": "Output Port 1",
							"value": 1
						}
					]
				},
				{
					title: 'Muh Node',
					inputs: [],
					outputs: [
						{
							"type": false,
							"id": "out1",
							"title": "Output Port 1",
							"value": 1
						}
					]
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				}
			]
		});
	});
	


	$('body').append('<button id="addRepository2">Add Repository - general (2)</button>');
	$('#addRepository2').click(function() {
		jsCow.find('node-editor-2').addNodesRepository({
			group: 'general',
			title: 'General Nodes',
			description: 'General repository of node types.',
			types: [
				{
					title: 'Node 1/1',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: [
						{
							"type": false,
							"id": "out1",
							"title": "Output Port 1",
							"value": 1
						}
					]
				},
				{
					title: 'Muh Node',
					inputs: [],
					outputs: [
						{
							"type": false,
							"id": "out1",
							"title": "Output Port 1",
							"value": 1
						}
					]
				},
				{
					title: 'Test Node',
					inputs: [
						{
							"type": false,
							"id": "in1",
							"title": "Input Port 1",
							"value": 1
						}
					],
					outputs: []
				}
			]
		});
	});
	

	console.timeEnd('all');
	console.log(jsCow.componentsObjectList.length, "components created...");
	
});