function toTitleCase(str)
{
    return str.replace(/\w[^\s-]*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}).replace("Of ","of ").replace("The ","the ").replace("In ","in ");
}

var cardlist = 'Fire Sigil|Granite Monument|Charchain Flail|Flame Blast|Forge Wolf|Frontier Jito|Grenadin Drone|Heavy Axe|Light the Fuse|Oni Ronin|Pyroknight|Voprex, the Great Ruin|Ruin|Ruthless Stranger|Sparring Partner|Temper|Ticking Grenadin|Torch|Warhelm|Bladekin Apprentice|Brazen Daredevil|Clever Stranger|Detonate|Kaleb\'s Favor|Oni Striker|Ornate Katana|Piercing Shot|Pyre Adept|Rakano Outlaw|Direwood Rampager|Rampage|Song of War|Assembly Line|Censari Brigand|Granite Acolyte|Oni Quartermaster|Rakano Flagbearer|Rally|Rebel Sharpshooter|Shogun\'s Scepter|Burn Out|Centaur Outrider|Cloud of Ash|Furnace Mage|Guerrilla Fighter|Magma Javelin|Outlands Sniper|Rebel Illuminator|Recogulator|Steelfang Chakram|Blazing Renegade|Calderan Channeler|Centaur Raidleader|Dusthoof Brawler|Flash Fire|Infernus|Obliterate|Shogun of the Wastes|Soulfire Drake|Crowd Favorite|Frontline Cyclops|General Izalio|Greed\'s Reward|Hellfire Rifle|Stonescar Maul|Worldpyre Phoenix|Claw of the First Dragon|Steelbound Dragon|Kaleb, Uncrowned Prince|Lavablood Goliath|Amber Monument|Copper Conduit|Forcefield|Sand Warrior|Time Sigil|Excavate|Infinite Hourglass|Initiate of the Sands|Ornamental Daggers|Predator\'s Instinct|Sanctuary Priest|Seer\'s Companion|Silence|Slow|Water of Life|Accelerated Evolution|Accelerate|Bold Adventurer|Ephemeral Wisp|Friendly Wisp|Refresh|Sandform|Sauropod Wrangler|Secret Pages|Talir\'s Favored|Teleport|Temple Scribe|Voice of the Speaker|Ageless Mentor|Amber Acolyte|Clockroach|Dawnwalker|Decay|Determined Stranger|Dispel|Dune Phantom|Nomad Healer|Scorpion Wasp|Synchronized Strike|Unlock Potential|Ancient Lore|Healer\'s Cloak|Horned Vorlunk|Marisen\'s Disciple|Oasis Sanctuary|Praxis Displacer|Sandstorm Titan|Steward of Prophecy|Timekeeper|Towertop Patrol|Xenan Guardian|Xenan Obelisk|Divining Rod|Elysian Pathfinder|Idol of Destran|Lumen Defender|Merciless Stranger|Passage of Ages|Reliquary Raider|Striking Snake Formation|Towering Terrazon|Twinbrood Sauropod|Lumen Shepherd|Mystic Ascendant|Predatory Carnosaur|Ancient Terrazon|Carnosaur Behemoth|Hall of Lost Kings|Pillar of Amar|Marisen, the Eldest|Talir, Who Sees Beyond|Justice Sigil|Emerald Monument|Gilded Glaive|Detain|District Infantry|Elder\'s Feather|Finest Hour|Inspire|Protect|Steadfast Deputy|Tinker Apprentice|Valkyrie Aspirant|Argenport Soldier|Crownwatch Commando|Crownwatch Longsword|Crownwatch Paladin|Eager Owlet|Minotaur Grunt|Paladin Oathbook|Rebuke|Reinforce|Rolant\'s Favor|Tinker Overseer|Vanquish|Auric Sentry|Brightmace Paladin|Bronze Cuirass|Emerald Acolyte|Hero of the People|Hooru Envoy|Loyal Watchwing|Order of the Spire|Privilege of Rank|Silverwing Familiar|Spire Chaplain|Treasury Guard|Valkyrie Enforcer|Valorous Stranger|Armorsmith|Auric Runehammer|Blinding Burst|Copperhall Recruit|Crownwatch Cavalry|Hammer of Might|Mantle of Justice|Overdrive|Prosecutor-at-Arms|Silverwing Avenger|Stalwart Shield|Tireless Stranger|Treasury Gate|Auric Bailiff|Combrei Magister|Harsh Rule|Marshal Ironthorn|Mithril Mace|Silverwing Commander|Augmented Form|Ceremonial Mask|Civic Peacekeeper|Fourth-Tree Elder|Plated Demolisher|Retribution|Valkyrie Wings|Flight Lieutenant|Rolant\'s Honor Guard|Rolant, the Iron Fist|Sword of the Sky King|Primal Sigil|Cobalt Monument|Shamanic Trance|Blind Storyteller|Chill|Cloudsnake Hatchling|Levitate|Permafrost|Unstable Form|Yeti Spy|Backlash|Cloudsnake Saddle|East-Wind Herald|Eilyn\'s Favor|Herald\'s Song|Lightning Storm|Lightning Strike|New Stranger|Second Sight|Static Bolt|Tundra Explorer|Violent Gust|Whispering Wind|Wild Cloudsnake|Yeti Snowslinger|Cobalt Acolyte|Eye of Winter|Flash Freeze|Ice Sprite|Icebreaker|Mirror Image|Polymorph|Push Onward|Scaly Gruan|Skysnapper|Thunderbird|Wisdom of the Elders|Avalanche Stalker|Clifftop Rider|Cloudsnake Harrier|Deranged Dinomancer|Jarrall\'s Frostkin|Rain of Frogs|Serpent Trainer|Stormcaller|Aerial Ace|Crystallize|Elysian Trailblazer|Jotun Hurler|Jotun Warrior|Magus of the Mist|Primal Incarnation|Scouting Party|Soaring Stranger|Staff of Stories|West-Wind Herald|Windshaper|Araktodon|Celestial Omen|Hatchery Hunter|Jarrall Iceheart|Mistveil Drake|North-Wind Herald|Sapphire Dragon|Rimescale Draconus|Thunderstrike Dragon|Channel the Tempest|Eilyn, Queen of the Wilds|Scourge of Frosthome|Skycrag Wyvarch|Shadow Sigil|Amethyst Monument|Blood Beetle|Dark Return|Direfang Spider|Ghostform|Hair-Trigger Stranger|Knifejack|Pilfer|Rapid Shot|Sabotage|Sickness|Slumbering Stone|Suffocate|Annihilate|Argenport Instigator|Blackguard Sidearm|Cabal Rogue|Dark Wisp|Devouring Shadow|Devour|Jungle Prowler|Lethrai Ranger|Scavenging Vulture|Sporefolk|Vampire Bat|Vara\'s Favor|Venomfang Dagger|Amethyst Acolyte|Beastcaller\'s Amulet|Desperado|Direwood Beastcaller|Execute|Feln Assassin|Lethrai Nightblade|Lifedrinker|Madness|Plague|Ravenous Thornbeast|Shadowlands Guide|Torrent of Spiders|Xenan Destroyer|Back-Alley Bouncer|Cabal Recruiter|Deathstrike|Impending Doom|Lethrai Falchion|Soul Collector|Steward of the Past|Stonescar Magus|Subvert|Ashara, the Deadshot|Cabal Cutthroat|Grasping at Shadows|Lurking Sanguar|Oblivion Spike|Sinister Warlock|Subtle Stranger|Umbren Reaper|Whip Chain|Argenport Ringmaster|Horsesnatcher Bat|Spirit Drain|Whispers in the Void|Azindel\'s Gift|Venomspine Hydra|Touch of the Umbren|Vara, Fate-Touched|The Last Word|The Witching Hour|Praxis Banner|Seat of Impulse|Rakano Banner|Seat of Glory|Fearless Nomad|Champion of Glory|Rakano Artisan|Crownwatch Deserter|Ijin, Imperial Armorer|Sword of Icaria|Battleblur Centaur|Longhorn Sergeant|Morningstar|Navani, Warsinger|Renegade Valkyrie|Righteous Fury|Rise to the Challenge|Coup de Grace|Deepforged Plate|Field Captain|Ferocious Stranger|Starsteel Daisho|Icaria, the Liberator|Combrei Banner|Seat of Progress|Safe Return|Awakened Student|Desert Marshal|Combrei Healer|Knight-Chancellor Siraf|Stand Together|Vodakhan\'s Staff|Copperhall Elite|Enlightened Stranger|Karmic Guardian|Scepter of Nobility|Stronghold\'s Visage|The Great Parliament|Reality Warden|Squad Strategist|Champion of Progress|Minotaur Ambassador|Vodakhan, Temple Speaker|A New Tomorrow|Elysian Banner|Seat of Wisdom|Unexpected Arrival|Call the Ancients|Cocoon|Storm Lynx|Amaran Camel|Crown of Possibilities|False Prince|Pteriax Hatchling|Champion of Wisdom|Crystalline Chalice|Cirso, the Great Glutton|Explorer Emeritus|Hunting Pteriax|Psionic Savant|Fortunate Stranger|Curiox, the Collector|Shimmerpack|Gemini Ritual|Hooru Banner|Seat of Order|Argenport Banner|Seat of Vengeance|Seat of Fury|Skycrag Banner|Feln Banner|Seat of Cunning|Twilight Raptor|Gorgon Swiftblade|Grim Stranger|Harbinger\'s Bite|Haunting Scream|Feln Bloodcaster|Gorgon Fanatic|Midnight Gale|Recurring Nightmare|Trickster\'s Cloak|Feeding Time|Champion of Cunning|Spell Swipe|Withering Witch|Black-Sky Harbinger|Cabal Mastermind|Nightmaw, Sight Unseen|Snowcrush Animist|Dimensional Rift|Seat of Chaos|Stonescar Banner|Combust|Obsidian Golem|Swift Stranger|Treachery|Bloodrite Kalis|Brimstone Altar|Champion of Chaos|Pit Fighter|Bandit Queen|Black Iron Manacles|Statuary Maiden|Runic Revolver|Scraptank|Slagmite Swarm|Smuggler\'s Stash|Warband Chieftain|Infernal Tyrant|Stonescar Leviathan|Seat of Mystery|Xenan Banner|Diplomatic Seal|Spiked Helm|Seek Power|Snipe|Village Watch|Worn Shield|Combrei Stranger|Daze|Elysian Stranger|Feln Stranger|Messenger Falcon|Outlands Sellsword|Rakano Stranger|Stonescar Stranger|Alchemical Blast|Highway Bandit|Hired Cavalry|Veteran Mercenary|Trained Rhinoch|War Elephant'
var cards = cardlist.split('|');

var cardSize;
chrome.storage.sync.get({"cardSize":50},function(result) {
	cardSize = result.cardSize;
});
console.log("onload cardsize: " + cardSize);

chrome.storage.onChanged.addListener(function (changes,areaName) {
	cardSize = changes.cardSize.newValue;
})

var regs;

$(document).tooltip({
	items: "span.eternal-hover-card-container",
	track: true,
	classes: {
		"ui-tooltip": "eternal-hover-card"
	},
	content: function() {
		var element = $(this);
		return "<img src=\"http://www.numotgaming.com/cards/images/cards/" + toTitleCase(element.text()) + ".png\" style=\"width:" + cardSize + "%\" /><br /><img src=\"http://www.numotgaming.com/wp-content/uploads/logo-1.png\" style=\"width:" + cardSize + "%\" />";
	}
});

var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, function(node) {
	for (i = 0; i < cards.length; i++) {
		var re = new RegExp(cards[i].replace(",",",?"), 'gi');
		if((regs = re.exec(node.textContent.replace("’","'")))) {
			if(!node.parentNode.classList.contains('eternal-hover-card-container')) {
				var a = document.createElement('a');
				a.href = "http://www.numotgaming.com/series/eternal/"
				var span = document.createElement('span');
				span.classList.add('eternal-hover-card-container');
				span.appendChild(document.createTextNode(regs[0]));
				a.appendChild(span)
				
				var after = node.splitText(regs.index);
				after.nodeValue = after.nodeValue.substring(regs[0].length);
				node.parentNode.insertBefore(a, after);
			
			}
		}
	}
	return NodeFilter.FILTER_SKIP;
}, false);

// Make the walker step through the nodes
walker.nextNode();